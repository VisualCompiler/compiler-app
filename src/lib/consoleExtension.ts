// Custom console extension for assembling and emulation errors
export interface ConsoleMessage {
  id: string;
  type: "assembling" | "emulation" | "error" | "warning" | "info";
  message: string;
  timestamp: Date;
  details?: any;
}

class CustomConsole {
  private messages: ConsoleMessage[] = [];
  private listeners: ((messages: ConsoleMessage[]) => void)[] = [];

  // Add a message to the console
  private addMessage(
    type: ConsoleMessage["type"],
    message: string,
    details?: any
  ) {
    const consoleMessage: ConsoleMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      message,
      timestamp: new Date(),
      details,
    };

    this.messages.push(consoleMessage);

    // Keep only the last 100 messages to prevent memory issues
    if (this.messages.length > 100) {
      this.messages = this.messages.slice(-100);
    }

    // Notify listeners
    this.listeners.forEach((listener) => listener([...this.messages]));

    // Also log to the real console for debugging
    const originalMethod =
      type === "assembling" || type === "emulation"
        ? console.log
        : type === "error"
        ? console.error
        : type === "warning"
        ? console.warn
        : type === "info"
        ? console.info
        : console.log;
    if (originalMethod) {
      originalMethod(`[${type.toUpperCase()}] ${message}`, details || "");
    }
  }

  // Custom console methods - only for errors
  assemblingError = (message: string, details?: any) => {
    this.addMessage("error", `[ASSEMBLING] ${message}`, details);
  };

  emulationError = (message: string, details?: any) => {
    this.addMessage("error", `[EMULATION] ${message}`, details);
  };

  // Subscribe to console messages
  subscribe = (listener: (messages: ConsoleMessage[]) => void) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  // Get all messages
  getMessages = () => [...this.messages];

  // Clear all messages
  clear = () => {
    this.messages = [];
    this.listeners.forEach((listener) => listener([]));
  };

  // Get messages by type
  getMessagesByType = (type: ConsoleMessage["type"]) => {
    return this.messages.filter((msg) => msg.type === type);
  };
}

// Create singleton instance
export const customConsole = new CustomConsole();

// Extend the global console object
declare global {
  interface Console {
    assemblingError: (message: string, details?: any) => void;
    emulationError: (message: string, details?: any) => void;
  }
}

// Add custom methods to the global console
if (typeof window !== "undefined") {
  (window.console as any).assemblingError = customConsole.assemblingError;
  (window.console as any).emulationError = customConsole.emulationError;
}
