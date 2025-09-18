import { EMULATOR_CONFIG } from './emulatorConfig'

// TypeScript declarations for keystone.js
declare global {
  interface Window {
    ks: any
    cs: any
  }
}

export interface BinaryLine {
  line: string
  offset: number
  address: string
  bytes: string[]
  type: 'instruction' | 'label' | 'directive'
  directiveType?: 'globl' | 'data' | 'text'
}

export const convertAssemblyToBinary = async (
  assemblyCode: string,
  hasMain: boolean
): Promise<BinaryLine[]> => {
  let ks: any = null
  let cs: any = null

  try {
    if (!window.ks || !window.ks.Keystone) {
      throw new Error('Keystone.js not available')
    }
    if (!window.cs || !window.cs.Capstone) {
      throw new Error('Capstone.js not available')
    }

    const originalLines = assemblyCode.split('\n')
    const lines = originalLines
      .map((line, index) => ({
        text: line.trim(),
        original: line,
        index: index + 1,
      }))
      .filter(
        (line) =>
          line.text && !line.text.startsWith(';') && !line.text.startsWith('//')
      )

    if (lines.length === 0) {
      return []
    }

    // Separate directives from instructions for Keystone
    const directiveLines: string[] = []
    const instructionLines: string[] = []
    const labelLines: string[] = []

    for (const { text: line } of lines) {
      if (
        line.startsWith('.globl') ||
        line.startsWith('.data') ||
        line.startsWith('.text') ||
        line.startsWith('.section')
      ) {
        directiveLines.push(line)
      } else if (line.endsWith(':')) {
        labelLines.push(line)
      } else {
        instructionLines.push(line)
      }
    }

    const keystone = window.ks
    ks = new keystone.Keystone(keystone.ARCH_X86, keystone.MODE_64)
    ks.option(keystone.OPT_SYNTAX, keystone.OPT_SYNTAX_INTEL)

    // Filter out invalid instructions before assembling
    const validInstructionLines: string[] = []
    for (let i = 0; i < instructionLines.length; i++) {
      const instructionLine = instructionLines[i]
      // Find the line number more efficiently
      const lineInfo = lines.find((line) => line.text === instructionLine)
      const lineNumber = lineInfo?.index || i + 1

      // Skip empty lines or lines with only whitespace
      if (!instructionLine.trim()) {
        continue
      }

      try {
        const singleResult = ks.asm(instructionLine)
        if (singleResult.failed) {
          // Skip invalid instructions but log them
          ;(window as any).console.assemblingWarning(
            `Skipping invalid instruction in line ${lineNumber}: "${instructionLine}" - ${singleResult.err}`,
            {
              instruction: instructionLine,
              lineNumber,
              error: singleResult.err,
            },
            'invalid-instruction-skipped'
          )
          continue
        }
        if (singleResult.length === 0) {
          ;(window as any).console.assemblingWarning(
            `Skipping empty instruction in line ${lineNumber}: "${instructionLine}"`,
            { instruction: instructionLine, lineNumber },
            'empty-instruction-skipped'
          )
          continue
        }
        validInstructionLines.push(instructionLine)
      } catch (error) {
        continue
      }
    }

    // Assemble only the valid instruction lines, not the entire assemblyCode
    const validInstructions = validInstructionLines.join('\n')
    const result = ks.asm(validInstructions)
    if (result.failed) {
      const errorMsg = `Assembly failed: ${result.err}`
      ;(window as any).console.assemblingError(
        errorMsg,
        { assemblyCode: validInstructions, result },
        'assembly-failed'
      )
      throw new Error(errorMsg)
    }
    const machineBytes = result
    const capstone = window.cs
    cs = new capstone.Capstone(capstone.ARCH_X86, capstone.MODE_64)
    const instructions = cs.disasm(
      machineBytes,
      Number(EMULATOR_CONFIG.CODE_SEGMENT_START)
    )

    const mapping: BinaryLine[] = []
    let instIndex = 0
    let currentOffset = EMULATOR_CONFIG.CODE_SEGMENT_START
    const unmappedLines: Array<{ line: string; lineNumber: number }> = []

    // Create a set of valid instruction lines for quick lookup
    const validInstructionSet = new Set(validInstructionLines)

    // Process all lines in order, handling directives and instructions appropriately
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const {
        text: line,
        original: originalLine,
        index: lineNumber,
      } = lines[lineIndex]
      if (line === '') continue // skip blanks

      if (line.startsWith('.globl')) {
        // Global symbol declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, '0')}`,
          bytes: [],
          type: 'directive',
          directiveType: 'globl',
        })
      } else if (line.startsWith('.data')) {
        // Data section declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, '0')}`,
          bytes: [],
          type: 'directive',
          directiveType: 'data',
        })
      } else if (line.startsWith('.text')) {
        // Text section declaration - no machine code
        mapping.push({
          line: originalLine, // Keep original formatting
          offset: currentOffset,
          address: `0x${currentOffset.toString(16).padStart(16, '0')}`,
          bytes: [],
          type: 'directive',
          directiveType: 'text',
        })
      } else if (line.endsWith(':')) {
        // label → record current offset (if available) and normalize label name
        const offset =
          instIndex < instructions.length
            ? instructions[instIndex].address
            : currentOffset
        mapping.push({
          line: line,
          offset,
          address: `0x${offset.toString(16).padStart(16, '0')}`,
          bytes: [],
          type: 'label',
        })
      } else if (validInstructionSet.has(line)) {
        // instruction line → map to Capstone instruction (only if it's valid)
        if (instIndex >= instructions.length) {
          // This instruction couldn't be mapped to disassembled code
          unmappedLines.push({ line: originalLine, lineNumber })
          continue
        }

        const inst = instructions[instIndex]
        const bytes = Array.from(inst.bytes).map((b: any) =>
          b.toString(16).padStart(2, '0')
        )
        const offset = inst.address

        mapping.push({
          line: originalLine, // Keep original formatting
          offset,
          address: `0x${inst.address.toString(16).padStart(16, '0')}`,
          bytes,
          type: 'instruction',
        })

        instIndex++
        currentOffset = inst.address + inst.bytes.length
      } else {
        // Invalid instruction line - skip it but don't add to mapping
        unmappedLines.push({ line: originalLine, lineNumber })
        continue
      }
    }

    // Report unmapped lines
    if (unmappedLines.length > 0) {
      for (const unmapped of unmappedLines) {
        ;(window as any).console.assemblingWarning(
          `Line ${unmapped.lineNumber}: Instruction could not be mapped to disassembled code`,
          { instruction: unmapped.line, lineNumber: unmapped.lineNumber },
          'unmapped-instruction'
        )
      }
    }

    if (!hasMain) {
      // Use custom console to emit warning
      ;(window as any).console.assemblingWarning(
        'No main function provided. Execution is disabled.',
        undefined,
        'no-main-function'
      )
    }

    return mapping
  } catch (error) {
    throw error
  } finally {
    // Ensure proper cleanup even if exceptions occur
    if (ks) {
      try {
        ks.close()
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    if (cs) {
      try {
        cs.close()
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  }
}
