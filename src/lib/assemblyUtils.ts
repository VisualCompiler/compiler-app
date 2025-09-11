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
  try {
    if (!window.ks || !window.ks.Keystone) {
      throw new Error("Keystone.js not available");
    }
    if (!window.cs || !window.cs.Capstone) {
      throw new Error("Capstone.js not available");
    }
    const lines = assemblyCode
      .split("\n")
      .map((line) => line.trim())
      .filter(
        (line) => line && !line.startsWith(";") && !line.startsWith("//")
      );
    if (lines.length === 0) {
      return [];
    }

    // Separate directives from instructions for Keystone
    const directiveLines: string[] = [];
    const instructionLines: string[] = [];
    const labelLines: string[] = [];

    for (const line of lines) {
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
    const ks = new keystone.Keystone(keystone.ARCH_X86, keystone.MODE_64);
    ks.option(keystone.OPT_SYNTAX, keystone.OPT_SYNTAX_INTEL);

    
    for (let i = 0; i < instructionLines.length; i++) {
      const instructionLine = instructionLines[i];
      const lineNumber =
        lines.findIndex((line) => line.trim() === instructionLine) + 1;
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
    const cs = new capstone.Capstone(capstone.ARCH_X86, capstone.MODE_64);
    const instructions = cs.disasm(
      machineBytes,
      Number(EMULATOR_CONFIG.CODE_SEGMENT_START)
    );
    
    const mapping: BinaryLine[] = [];
    let instIndex = 0;
    let currentOffset = EMULATOR_CONFIG.CODE_SEGMENT_START;
    const unmappedLines: Array<{line: string, lineNumber: number}> = [];

    // Process all lines in order, handling directives and instructions appropriately
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (line === "") continue; // skip blanks

      const lineNumber = lines.findIndex((l) => l.trim() === line) + 1;

      if (line.startsWith(".globl")) {
        // Global symbol declaration - no machine code
        mapping.push({
          line,
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "globl",
        });
      } else if (line.startsWith(".data")) {
        // Data section declaration - no machine code
        mapping.push({
          line,
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "data",
        });
      } else if (line.startsWith(".text")) {
        // Text section declaration - no machine code
        mapping.push({
          line,
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "directive",
          directiveType: "text",
        });
      } else if (line.endsWith(":")) {
        // label → record current offset (if available)
        const offset =
          instIndex < instructions.length
            ? instructions[instIndex].address
            : currentOffset;
        mapping.push({
          line,
          offset,
          address: `0x${offset.toString(16).padStart(16, "0")}`,
          bytes: [],
          type: "label",
        });
      } else {
        // instruction line → map to Capstone instruction
        if (instIndex >= instructions.length) {
          // This instruction couldn't be mapped to disassembled code
          unmappedLines.push({ line, lineNumber });
          continue;
        }
        
        const inst = instructions[instIndex];
        const bytes = Array.from(inst.bytes).map((b: any) =>
          b.toString(16).padStart(2, "0")
        );
        const offset = inst.address;

        mapping.push({
          line,
          offset,
          address: `0x${(EMULATOR_CONFIG.CODE_SEGMENT_START + inst.address)
            .toString(16)
            .padStart(16, "0")}`,
          bytes,
          type: "instruction",
        });

        instIndex++;
        currentOffset =
          EMULATOR_CONFIG.CODE_SEGMENT_START + inst.address + inst.bytes.length;
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
      (line) => line.type === "label" && line.line.includes("main:")
    );

    if (!hasMainFunction) {
      // Use custom console to emit warning
      (window as any).console.assemblingWarning(
        "No main function provided. Execution is disabled.",
        undefined,
        "no-main-function"
      );
    }

    ks.close();
    cs.close();
    return mapping;
  } catch (error) {
    throw error;
  }
};
