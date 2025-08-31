// TypeScript declarations for keystone.js
declare global {
  interface Window {
    ks: any;
  }
}

export interface BinaryLine {
  lineNumber: number;
  assembly: string;
  binary: string;
  address: string;
}

export const convertAssemblyToBinary = async (assemblyCode: string): Promise<BinaryLine[]> => {
  if (!assemblyCode?.trim()) {
    return [];
  }
  
  if (typeof window === 'undefined' || !window.ks?.Keystone) {
    console.warn('Keystone.js not available');
    return [];
  }

  try {
    const ks = window.ks;
    const keystone = new ks.Keystone(ks.ARCH_X86, ks.MODE_64);
    keystone.option(ks.OPT_SYNTAX, ks.OPT_SYNTAX_INTEL);

    const lines = assemblyCode
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith(';') && !line.startsWith('//') && !line.startsWith('.'));

    if (lines.length === 0) {
      return [];
    }

    const asmWithDelims: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      asmWithDelims.push(lines[i].trim());
      if (i < lines.length - 1) asmWithDelims.push('int3');
    }

    console.log('Assembling:', asmWithDelims.join('\n'));

    const result = keystone.asm(asmWithDelims.join('\n'));
    console.log('result:', result);

    if (result.failed) {
      console.error('Assembly failed to produce machine code');
      return [];
    }

    const newBinaryLines: BinaryLine[] = [];
    let currentByteIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const assemblyLine = lines[i].trim();
      let instructionBytes = '';

      
      // Find bytes for this instruction (until we hit int3 or run out of bytes)
      while (currentByteIndex < result.length) {
        const currentByte = result[currentByteIndex];

        
        // Check if we've hit an int3 instruction (0xCC)
        if (currentByte === 0xCC) {
          currentByteIndex++; // Skip the int3 byte
          break;
        }
        
        // Add this byte to the instruction
        instructionBytes += currentByte.toString(16).padStart(2, '0') + ' ';
        currentByteIndex++;
      }
      
      // Remove trailing space from instruction bytes
      instructionBytes = instructionBytes.trim();
      
      // Create binary line for this instruction
      const binaryLine: BinaryLine = {
        lineNumber: i + 1,
        assembly: assemblyLine,
        binary: instructionBytes,
        address: `0x${(i * 4).toString(16).padStart(8, '0')}`, // Simple address calculation
      };
      
      newBinaryLines.push(binaryLine);
    }
    
    return newBinaryLines;
  } catch (err) {
    console.error('Assembly failed:', err);
    return [];
  }
};
