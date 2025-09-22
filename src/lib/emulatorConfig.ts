// Emulator configuration constants

// TypeScript declarations for unicorn.js
declare global {
  interface Window {
    uc: any;
  }
}

export interface Register {
  name: string;
  id: number;
  value: string;
  description?: string;
}

// x86-64 Register definitions
export const X86_REGISTERS: Register[] = [
  {
    name: "RAX",
    id: window.uc.X86_REG_RAX,
    value: "00 00 00 00 00 00 00 00",
    description: "Accumulator register",
  },
  {
    name: "RBX",
    id: window.uc.X86_REG_RBX,
    value: "00 00 00 00 00 00 00 00",
    description: "Base register",
  },
  {
    name: "RCX",
    id: window.uc.X86_REG_RCX,
    value: "00 00 00 00 00 00 00 00",
    description: "Counter register",
  },
  {
    name: "RDX",
    id: window.uc.X86_REG_RDX,
    value: "00 00 00 00 00 00 00 00",
    description: "Data register",
  },
  {
    name: "RSI",
    id: window.uc.X86_REG_RSI,
    value: "00 00 00 00 00 00 00 00",
    description: "Source index register",
  },
  {
    name: "RDI",
    id: window.uc.X86_REG_RDI,
    value: "00 00 00 00 00 00 00 00",
    description: "Destination index register",
  },
  {
    name: "RSP",
    id: window.uc.X86_REG_RSP,
    value: "00 00 00 00 00 00 00 00",
    description: "Stack pointer register",
  },
  {
    name: "RBP",
    id: window.uc.X86_REG_RBP,
    value: "00 00 00 00 00 00 00 00",
    description: "Base pointer register",
  },
  {
    name: "R8",
    id: window.uc.X86_REG_R8,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 8",
  },
  {
    name: "R9",
    id: window.uc.X86_REG_R9,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 9",
  },
  {
    name: "R10",
    id: window.uc.X86_REG_R10,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 10",
  },
  {
    name: "R11",
    id: window.uc.X86_REG_R11,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 11",
  },
  {
    name: "R12",
    id: window.uc.X86_REG_R12,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 12",
  },
  {
    name: "R13",
    id: window.uc.X86_REG_R13,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 13",
  },
  {
    name: "R14",
    id: window.uc.X86_REG_R14,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 14",
  },
  {
    name: "R15",
    id: window.uc.X86_REG_R15,
    value: "00 00 00 00 00 00 00 00",
    description: "General purpose register 15",
  },
  {
    name: "RIP",
    id: window.uc.X86_REG_RIP,
    value: "00 00 00 00 00 00 00 00",
    description: "Instruction pointer register",
  },
  {
    name: "EFLAGS",
    id: window.uc.X86_REG_EFLAGS,
    value: "00 00 00 00 00 00 00 00",
    description: "Flags register",
  },
];

// Emulator settings for x86-64 architecture
export const EMULATOR_CONFIG = {
  CODE_SIZE: 0x1000_0000,
  STACK_SIZE: 0x1000_0000,
  CODE_SEGMENT_START: 0x0,
  STACK_SEGMENT_START: 0x3000_0000,
};

export class UnicornEmulator {
  private isInitialized = false;
  private uc: any;

  constructor() {
    if (typeof window === "undefined" || !window.uc || !window.uc.Unicorn) {
      throw new Error("Unicorn.js not available");
    }
    this.uc = window.uc.Unicorn;
  }

  initialize(): boolean {
    try {
      const arch = window.uc.ARCH_X86;
      const mode = window.uc.MODE_64;
      this.uc = new window.uc.Unicorn(arch, mode);
      this.isInitialized = true;

      this.setRegister(
        window.uc.X86_REG_RBP,
        EMULATOR_CONFIG.STACK_SEGMENT_START + EMULATOR_CONFIG.STACK_SIZE - 8
      );
      this.setRegister(
        window.uc.X86_REG_RSP,
        EMULATOR_CONFIG.STACK_SEGMENT_START + EMULATOR_CONFIG.STACK_SIZE - 8
      );
      const layoutMapped = this.mapDefaultLayout();
      return layoutMapped;
    } catch (error) {
      console.error("Failed to initialize emulator:", error);
      return false;
    }
  }

  /** Map code and stack regions. */
  mapMemory(address: number, size: number, permissions?: number): boolean {
    if (!this.isInitialized) return false;
    try {
      const perms = permissions ?? window.uc.PROT_ALL;
      console.log(
        `Mapping memory at 0x${address.toString(
          16
        )} with size 0x${size.toString(16)} and permissions ${perms}`
      );
      this.uc.mem_map(address, size, perms);
      console.log(`Successfully mapped memory at 0x${address.toString(16)}`);
      return true;
    } catch (error) {
      console.error(
        `Failed to map memory at 0x${address.toString(16)}:`,
        error
      );
      return false;
    }
  }

  mapDefaultLayout(): boolean {
    const codeStart = EMULATOR_CONFIG.CODE_SEGMENT_START;
    const codeSize = EMULATOR_CONFIG.CODE_SIZE;
    const stackStart = EMULATOR_CONFIG.STACK_SEGMENT_START; 
    const stackSize = EMULATOR_CONFIG.STACK_SIZE; 

    return (
      this.mapMemory(codeStart, codeSize) &&
      this.mapMemory(stackStart, stackSize)
    );
  }

  writeMemory(address: number, data: Uint8Array): boolean {
    if (!this.isInitialized) {
      console.error("Emulator not initialized");
      return false;
    }
    this.uc.mem_write(address, Array.from(data));
    return true;
  }

  setRegister(registerId: number, value: number): boolean {
    if (!this.isInitialized) return false;
    this.uc.reg_write_i64(registerId, value);
    return true;
  }
  getRegister(registerId: number): number | null {
    if (!this.isInitialized) return null;
    const value = this.uc.reg_read_i64(registerId);
    return value;
  }

  start(begin: number, until: number, count: number = 1) {
    this.uc.emu_start(begin, until, 0, count);
  }

  getInstructionPointer(): number | null {
    return this.getRegister(window.uc.X86_REG_RIP);
  }

  stop(): boolean {
    if (!this.isInitialized) return false;
    try {
      this.uc.emu_stop();
      return true;
    } catch {
      return false;
    }
  }

  close(): void {
    if (this.uc && this.isInitialized) {
      try {
        this.uc.close();
      } catch {}
      this.isInitialized = false;
    }
  }

  readMemory(address: number, size: number): Uint8Array | null {
    if (!this.isInitialized) {
      console.error("Emulator not initialized");
      return null;
    }

    const data = this.uc.mem_read(address, size);
    return new Uint8Array(data);
  }

  getInitialized() {
    return this.isInitialized;
  }
}
