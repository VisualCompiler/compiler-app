// Custom console extension for assembling and emulation errors
export interface ConsoleMessage {
  id: string;
  type: "assembling" | "emulation" | "error" | "warning" | "info";
  message: string;
  timestamp: Date;
  details?: any;
  messageId?: string; // Unique identifier for the type of message
}

class CustomConsole {
  private messages: ConsoleMessage[] = [];
  private listeners: ((messages: ConsoleMessage[]) => void)[] = [];

  // Add a message to the console
  private addMessage(
    type: ConsoleMessage["type"],
    message: string,
    details?: any,
    messageId?: string
  ) {
    // Check if a message with the same messageId already exists
    if (messageId && this.messages.some((msg) => msg.messageId === messageId)) {
      return; // Don't add duplicate messages
    }

    const consoleMessage: ConsoleMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      message,
      timestamp: new Date(),
      details,
      messageId,
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

  // Custom console methods - only for errors and warnings
  assemblingError = (message: string, details?: any, messageId?: string) => {
    this.addMessage("error", `[ASSEMBLING] ${message}`, details, messageId);
  };

  emulationError = (message: string, details?: any, messageId?: string) => {
    this.addMessage("error", `[EMULATION] ${message}`, details, messageId);
  };

  assemblingWarning = (message: string, details?: any, messageId?: string) => {
    this.addMessage("warning", `[ASSEMBLING] ${message}`, details, messageId);
  };

  // Subscribe to console messages
  subscribe = (listener: (messages: ConsoleMessage[]) => void) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  getMessages = () => [...this.messages];

  clear = () => {
    this.messages = [];
    this.listeners.forEach((listener) => listener([]));
  };

  // Get messages by type
  getMessagesByType = (type: ConsoleMessage["type"]) => {
    return this.messages.filter((msg) => msg.type === type);
  };

  // Clear messages by messageId
  clearByMessageId = (messageId: string) => {
    this.messages = this.messages.filter((msg) => msg.messageId !== messageId);
    this.listeners.forEach((listener) => listener([...this.messages]));
  };
}

// Create singleton instance
export const customConsole = new CustomConsole();

// Extend the global console object
declare global {
  interface Console {
    assemblingError: (
      message: string,
      details?: any,
      messageId?: string
    ) => void;
    emulationError: (
      message: string,
      details?: any,
      messageId?: string
    ) => void;
    assemblingWarning: (
      message: string,
      details?: any,
      messageId?: string
    ) => void;
    clearByMessageId: (messageId: string) => void;
  }
}

// Add custom methods to the global console
if (typeof window !== "undefined") {
  (window.console as any).assemblingError = customConsole.assemblingError;
  (window.console as any).emulationError = customConsole.emulationError;
  (window.console as any).assemblingWarning = customConsole.assemblingWarning;
  (window.console as any).clearByMessageId = customConsole.clearByMessageId;
}
