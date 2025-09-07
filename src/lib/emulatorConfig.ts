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

  /** Convenience: map code + stack regions you’re using */
  mapDefaultLayout(): boolean {
    const codeStart = EMULATOR_CONFIG.CODE_SEGMENT_START; // Now 0x0
    const codeSize = EMULATOR_CONFIG.CODE_SIZE;
    const stackStart = EMULATOR_CONFIG.STACK_SEGMENT_START; // e.g. 0x3000_0000
    const stackSize = EMULATOR_CONFIG.STACK_SIZE; // e.g. 1MB

    console.log(
      `Mapping default layout: code at 0x${codeStart.toString(
        16
      )}, stack at 0x${stackStart.toString(16)}`
    );

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
    console.log(
      `Writing ${data.length} bytes to memory at 0x${address.toString(16)}`
    );
    console.log(
      "Data:",
      Array.from(data)
        .map((b) => "0x" + b.toString(16).padStart(2, "0"))
        .join(" ")
    );
    this.uc.mem_write(address, Array.from(data));
    console.log(
      `Successfully wrote ${data.length} bytes to 0x${address.toString(16)}`
    );
    return true;
  }

  setRegister(registerId: number, value: number): boolean {
    if (!this.isInitialized) return false;
    try {
      console.log(
        `Setting register ${registerId} to value 0x${value.toString(16)}`
      );
      this.uc.reg_write_i64(registerId, value);
      console.log(`Successfully set register ${registerId}`);
      return true;
    } catch (error) {
      console.error(`Failed to set register ${registerId}:`, error);
      return false;
    }
  }
  getRegister(registerId: number): number | null {
    if (!this.isInitialized) return null;
    try {
      const value = this.uc.reg_read_i64(registerId);
      return value;
    } catch (error) {
      console.error(`Failed to read register ${registerId}:`, error);
      return null;
    }
  }

  /** Start with optional single-instruction count */
  start(begin: number, until: number, count: number = 1) {
    // Check if the start address is accessible
    const rip = this.getInstructionPointer();
    console.log(
      `Current RIP: ${rip !== null ? "0x" + rip.toString(16) : "null"}`
    );

    this.uc.emu_start(begin, until, 0, count);
    console.log(this.uc.mem_read(begin, 8));
    console.log("Emulation started successfully");
  }

  getInstructionPointer(): number | null {
    console.log(
      `Getting instruction pointer, RIP register ID: ${window.uc.X86_REG_RIP}`
    );
    const rip = this.getRegister(window.uc.X86_REG_RIP);
    console.log(
      `RIP value from getRegister: ${
        rip !== null ? "0x" + rip.toString(16) : "null"
      }`
    );
    return rip;
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

  addCodeHook(callback: (address: number, size: number) => void): boolean {
    if (!this.isInitialized) return false;
    try {
      const HOOK_CODE = window.uc.HOOK_CODE ?? 4;
      this.uc.hook_add(
        HOOK_CODE,
        (addr: number, size: number) => {
          callback(addr, size);
        },
        null,
        0,
        0
      );
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

  /** Read memory for verification */
  readMemory(address: number, size: number): Uint8Array | null {
    if (!this.isInitialized) {
      console.error("Emulator not initialized");
      return null;
    }

    try {
      const data = this.uc.mem_read(address, size);
      return new Uint8Array(data);
    } catch (error) {
      console.error(
        `Failed to read memory at 0x${address.toString(16)}:`,
        error
      );
      return null;
    }
  }

  getInitialized() {
    return this.isInitialized;
  }
}
