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
    const validatedInstructions: string[] = [];
    for (let i = 0; i < instructionLines.length; i++) {
      const instructionLine = instructionLines[i];
      const lineNumber =
        lines.findIndex((line) => line.trim() === instructionLine) + 1;

      // Assemble just this instruction to validate it produces bytes
      const singleResult = ks.asm(instructionLine);
      if (singleResult.failed) {
        throw new Error(
          `Assembly failed at line ${lineNumber}: ${singleResult.err}`
        );
      }

      // Check if the instruction produces any bytes
      if (!singleResult || singleResult.length === 0) {
        throw new Error(
          `Instruction at line ${lineNumber} produces 0 bytes: "${instructionLine}"`
        );
      }

      validatedInstructions.push(instructionLine);
    }

    // Assemble all validated instruction lines together
    const result = ks.asm(validatedInstructions.join("\n"));
    if (result.failed) {
      throw new Error("Assembly failed: " + result.err);
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

    // Process all lines in order, handling directives and instructions appropriately
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (line === "") continue; // skip blanks

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
        if (instIndex >= instructions.length) break;
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
    ks.close();
    cs.close();
    return mapping;
  } catch (error) {
    throw error;
  }
};
