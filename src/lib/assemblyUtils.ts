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
  directiveType?: "globl" | "data" | "text" | "section" | "other";
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

    // Validate each instruction line individually
    const invalidInstructions: Array<{line: string, lineNumber: number, error: string}> = [];
    
    for (let i = 0; i < instructionLines.length; i++) {
      const instructionLine = instructionLines[i];
      const lineNumber =
        lines.findIndex((line) => line.trim() === instructionLine) + 1;

      // Assemble just this instruction to validate it produces bytes
      try {
        const singleResult = ks.asm(instructionLine);
        if (!singleResult.failed && singleResult.length === 0) {
          throw new Error(
            `Instruction at line ${lineNumber} produces 0 bytes: "${instructionLine}"`
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
      if (typeof window !== "undefined" && (window as any).console?.assemblingError) {
        (window as any).console.assemblingError(
          errorMsg,
          { assemblyCode, result },
          "assembly-failed"
        );
      } else {
        console.error(errorMsg);
      }
      throw new Error(errorMsg);
    }
    const machineBytes = result;
    const capstone = window.cs;
    const cs = new capstone.Capstone(capstone.ARCH_X86, capstone.MODE_64);
    const instructions = cs.disasm(
      machineBytes,
      Number(EMULATOR_CONFIG.CODE_SEGMENT_START)
    );
    // Check if disassembly produced fewer instructions than expected
    const expectedInstructionCount = instructionLines.length - invalidInstructions.length;
    if (instructions.length < expectedInstructionCount) {
      const warningMsg = `Disassembly produced ${instructions.length} instructions but expected ${expectedInstructionCount}. Some instructions may not have been properly disassembled.`;
      if (typeof window !== "undefined" && (window as any).console?.assemblingWarning) {
        (window as any).console.assemblingWarning(
          warningMsg,
          { 
            expected: expectedInstructionCount, 
            actual: instructions.length,
            invalidInstructions: invalidInstructions.length 
          },
          "disassembly-mismatch"
        );
      } else {
        console.warn(warningMsg);
      }
    }
    
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
      if (typeof window !== "undefined" && (window as any).console?.assemblingWarning) {
        for (const unmapped of unmappedLines) {
          (window as any).console.assemblingWarning(
            `Line ${unmapped.lineNumber}: Instruction could not be mapped to disassembled code`,
            { instruction: unmapped.line, lineNumber: unmapped.lineNumber },
            "unmapped-instruction"
          );
        }
      } else {
        console.warn("Unmapped instructions:");
        unmappedLines.forEach(unmapped => {
          console.warn(`Line ${unmapped.lineNumber}: "${unmapped.line}"`);
        });
      }
    }

    // Check for user-defined main function vs wrapper main function
    const hasUserMainFunction = mapping.some(
      (line) => line.type === "label" && line.line.includes("main:") && !line.line.includes("main.:")
    );
    const hasWrapperMainFunction = mapping.some(
      (line) => line.type === "label" && line.line.includes("main.:")
    );

    // If we have a wrapper main function, change its display name to "main:" and emit warning
    if (hasWrapperMainFunction && !hasUserMainFunction) {
      // Find and update the wrapper main function display
      const wrapperMainLine = mapping.find(
        (line) => line.type === "label" && line.line.includes("main.:")
      );
      if (wrapperMainLine) {
        wrapperMainLine.line = wrapperMainLine.line.replace("main.:", "main:");
      }

      // Find and update any .globl main. directives
      const globlMainLine = mapping.find(
        (line) => line.type === "directive" && line.line.includes(".globl main.")
      );
      if (globlMainLine) {
        globlMainLine.line = globlMainLine.line.replace(".globl main.", ".globl main");
      }

      // Emit warning that no user main was provided
      if (
        typeof window !== "undefined" &&
        (window as any).console?.assemblingWarning
      ) {
        (window as any).console.assemblingWarning(
          "No main function provided. Program will return 0.",
          undefined,
          "no-main-function"
        );
      } else {
        console.warn("No main function provided. Program will return 0.");
      }
    } else if (!hasUserMainFunction && !hasWrapperMainFunction) {
      // No main function at all
      if (
        typeof window !== "undefined" &&
        (window as any).console?.assemblingWarning
      ) {
        (window as any).console.assemblingWarning(
          "No main function provided. Program will return 0.",
          undefined,
          "no-main-function"
        );
      } else {
        console.warn("No main function provided. Program will return 0.");
      }
    }

    ks.close();
    cs.close();
    
    // Log summary information
    console.log("Assembly conversion summary:", {
      totalInputLines: assemblyCode.split("\n").length,
      filteredLines: lines.length,
      mappingLines: mapping.length,
      invalidInstructions: invalidInstructions.length,
      unmappedLines: unmappedLines.length,
      directives: mapping.filter(l => l.type === "directive").length,
      labels: mapping.filter(l => l.type === "label").length,
      instructions: mapping.filter(l => l.type === "instruction").length
    });
    
    console.log("Mapping:", mapping);
    return mapping;
  } catch (error) {
    throw error;
  }
};
