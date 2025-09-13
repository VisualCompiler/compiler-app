import { EMULATOR_CONFIG } from "./emulatorConfig";

// TypeScript declarations for keystone.js
declare global {
  interface Window {
    ks: any;
    cs: any;
  }
}

export interface BinaryLine {
  line: string;
  offset: number;
  address: string;
  bytes: string[];
  type: "instruction" | "label" | "directive";
  directiveType?: "globl" | "data" | "text";
}

export const convertAssemblyToBinary = async (
  assemblyCode: string
): Promise<BinaryLine[]> => {
  let ks: any = null;
  let cs: any = null;
  
  try {
    if (!window.ks || !window.ks.Keystone) {
      throw new Error("Keystone.js not available");
    }
    if (!window.cs || !window.cs.Capstone) {
      throw new Error("Capstone.js not available");
    }
    
    const originalLines = assemblyCode.split("\n");
    const lines = originalLines
      .map((line, index) => ({ text: line.trim(), original: line, index: index + 1 }))
      .filter(
        (line) => line.text && !line.text.startsWith(";") && !line.text.startsWith("//")
      );
      
    if (lines.length === 0) {
      return [];
    }

    // Separate directives from instructions for Keystone
    const directiveLines: string[] = [];
    const instructionLines: string[] = [];
    const labelLines: string[] = [];

    for (const { text: line } of lines) {
      if (
        line.startsWith(".globl") ||
        line.startsWith(".data") ||
        line.startsWith(".text") ||
        line.startsWith(".section")
      ) {
        directiveLines.push(line);
      } else if (line.endsWith(":")) {
        labelLines.push(line);
      } else {
        instructionLines.push(line);
      }
    }

    const keystone = window.ks;
    ks = new keystone.Keystone(keystone.ARCH_X86, keystone.MODE_64);
    ks.option(keystone.OPT_SYNTAX, keystone.OPT_SYNTAX_INTEL);

    
    for (let i = 0; i < instructionLines.length; i++) {
      const instructionLine = instructionLines[i];
      // Find the line number more efficiently
      const lineInfo = lines.find(line => line.text === instructionLine);
      const lineNumber = lineInfo?.index || i + 1;
      try {
        const singleResult = ks.asm(instructionLine);
        if (!singleResult.failed && singleResult.length === 0) {
          throw new Error(
            `Invalid instruction in line ${lineNumber}: "${instructionLine}"`
          );
        } 
      } catch (error) {
        // if (singleResult.failed) => line might contain a label, so we don't throw an error
      }
    }

    // Assemble all validated instruction lines together
    const result = ks.asm(assemblyCode);
    if (result.failed) {
      const errorMsg = `Assembly failed: ${result.err}`;
      (window as any).console.assemblingError(
        errorMsg,
        { assemblyCode, result },
        "assembly-failed"
      );
      throw new Error(errorMsg);
    }
    const machineBytes = result;
    const capstone = window.cs;
    cs = new capstone.Capstone(capstone.ARCH_X86, capstone.MODE_64);
    const instructions = cs.disasm(
      machineBytes,
      Number(EMULATOR_CONFIG.CODE_SEGMENT_START)
    );
    
    const mapping: BinaryLine[] = [];
    let instIndex = 0;
    let currentOffset = EMULATOR_CONFIG.CODE_SEGMENT_START;
    const unmappedLines: Array<{line: string, lineNumber: number}> = [];

    // Process all lines in order, handling directives and instructions appropriately
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const { text: line, original: originalLine, index: lineNumber } = lines[lineIndex];
      if (line === "") continue; // skip blanks

      if (line.startsWith(".globl")) {
        // Global symbol declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "globl",
        });
      } else if (line.startsWith(".data")) {
        // Data section declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "data",
        });
      } else if (line.startsWith(".text")) {
        // Text section declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "text",
        });
      } else if (line.endsWith(":")) {
        // label → record current offset (if available) and normalize label name
        const offset =
          instIndex < instructions.length
            ? instructions[instIndex].address
            : currentOffset;
        const labelName = line.slice(0, -1); // Remove trailing colon
        mapping.push({
          line: labelName, // Store bare label name
          offset,
          address: `0x${offset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "label",
        });
      } else {
        // instruction line → map to Capstone instruction
        if (instIndex >= instructions.length) {
          // This instruction couldn't be mapped to disassembled code
          unmappedLines.push({ line: originalLine, lineNumber });
          continue;
        }
        
        const inst = instructions[instIndex];
        const bytes = Array.from(inst.bytes).map((b: any) =>
          b.toString(16).padStart(2, "0")
        );
        const offset = inst.address;

        mapping.push({
          line: originalLine, // Keep original formatting
          offset,
          address: `0x${(inst.address)
            .toString(16)
            .padStart(16, "0")}`,
          bytes,
          type: "instruction",
        });

        instIndex++;
        currentOffset =
          inst.address + inst.bytes.length;
      }
    }

    // Report unmapped lines
    if (unmappedLines.length > 0) {
      for (const unmapped of unmappedLines) {
        (window as any).console.assemblingWarning(
          `Line ${unmapped.lineNumber}: Instruction could not be mapped to disassembled code`,
          { instruction: unmapped.line, lineNumber: unmapped.lineNumber },
          "unmapped-instruction"
        );
      }
    }

    // Check if there's no main function and emit warning
    const hasMainFunction = mapping.some(
      (line) => line.type === "label" && line.line === "main"
    );

    if (!hasMainFunction) {
      // Use custom console to emit warning
      (window as any).console.assemblingWarning(
        "No main function provided. Execution is disabled.",
        undefined,
        "no-main-function"
      );
    }

    return mapping;
  } catch (error) {
    throw error;
  } finally {
    // Ensure proper cleanup even if exceptions occur
    if (ks) {
      try {
        ks.close();
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    if (cs) {
      try {
        cs.close();
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  }
};
