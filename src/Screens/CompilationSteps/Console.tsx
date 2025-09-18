import React, { useEffect, useState } from "react";
import { Terminal, XCircle, CheckCircle, Trash2 } from "lucide-react";
import type { CompilationError } from "../../../public/scripts/kotlin-js/CompilerLogic";
import { customConsole, type ConsoleMessage } from "@/lib/consoleExtension";
import { Button } from "@/components/ui/button";
import "@/lib/consoleExtension"; // Initialize custom console

interface ConsoleProps {
  errors: CompilationError[];
  hasCompiled: boolean;
  sourceCode: string;
  className?: string;
}

export const Console: React.FC<ConsoleProps> = ({
  errors,
  hasCompiled,
  sourceCode,
  className = "",
}) => {
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [isExpanded] = useState(true);
  const [hideCustomConsole, setHideCustomConsole] = useState(false);

  useEffect(() => {
    // Subscribe to custom console messages
    const unsubscribe = customConsole.subscribe((newMessages) => {
      setConsoleMessages(newMessages);
    });

    // Get initial messages
    setConsoleMessages(customConsole.getMessages());

    return unsubscribe;
  }, []);

  const getMessageIcon = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return "📝";
    }
  };

  const getMessageColor = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "error":
        return "text-red-400";
      case "warning":
        return "text-yellow-400";
      default:
        return "text-gray-300";
    }
  };

  const getMessageBgColor = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "error":
        return "bg-red-500/10 border-l-2 border-red-500";
      case "warning":
        return "bg-yellow-500/10 border-l-2 border-yellow-500";
      default:
        return "bg-gray-500/5 border-l-2 border-gray-500";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-DE", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center justify-between p-2 border-b bg-secondary overflow-auto">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4" />
          {hasCompiled && errors.length === 0 && sourceCode.trim() !== "" && (
            <div className="flex items-center space-x-1 text-green-600">
              <CheckCircle className="h-3 w-3" />
            </div>
          )}
          {hasCompiled && errors.length > 0 && (
            <div className="flex items-center space-x-1 text-red-600">
              <XCircle className="h-3 w-3" />
              <span className="text-xs">{errors.length} error(s)</span>
            </div>
          )}
          {consoleMessages.length > 0 && (
            <div className="flex items-center space-x-1 text-yellow-600">
              <span className="text-xs">
                {consoleMessages.length} runtime message(s)
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* Toggle Custom Console */}
          {consoleMessages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setHideCustomConsole(!hideCustomConsole)}
              className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
            >
              {hideCustomConsole
                ? "Show Runtime Messages"
                : "Hide Runtime Messages"}
            </Button>
          )}

          {/* Clear Custom Console */}
          {consoleMessages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => customConsole.clear()}
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              title="Clear runtime messages"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          )}

          {/* Toggle Expand/Collapse */}
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            title={isExpanded ? "Collapse console" : "Expand console"}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronUp className="h-3 w-3" />
            )}
          </Button> */}
        </div>
      </div>

      {isExpanded && (
        <div className="overflow-auto p-2 font-mono text-xs bg-secondary/30">
          {/* Compilation Messages */}
          {!hasCompiled && (
            <div className="text-gray-600">
              Click "Compile" to start compilation
            </div>
          )}

          {hasCompiled && sourceCode.trim() === "" && (
            <div className="text-yellow-600">⚠ No source code provided</div>
          )}

          {hasCompiled && sourceCode.trim() !== "" && errors.length === 0 && (
            <div className="text-green-600">
              ✓ Compilation completed successfully
            </div>
          )}

          {hasCompiled &&
            errors.map((error, index) => {
              return (
                <div
                  key={index}
                  className="mb-2 p-2 bg-red-50/10 border border-red-500/40 rounded"
                >
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-3 w-3 text-red-500" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-red-800">
                          {error.stage.charAt(0).toUpperCase() +
                            error.stage.slice(1)}{" "}
                          failed with:
                        </span>
                      </div>
                      <p className="text-red-700">{error.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          {hasCompiled && errors.length > 0 && (
            <div className="mt-4 text-gray-600">
              Compilation failed with {errors.length} error(s)
            </div>
          )}

          {/* Runtime Errors */}
          {!hideCustomConsole && consoleMessages.length > 0 && (
            <div className="mt-4">
              <div className="text-xs text-gray-500 mb-2 border-t border-gray-300 pt-2">
                Runtime Messages:
              </div>
              <div className="space-y-1">
                {consoleMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-2 rounded ${getMessageBgColor(message.type)}`}
                  >
                    <div className="flex items-start space-x-2">
                      <span className="text-sm">
                        {getMessageIcon(message.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`font-medium ${getMessageColor(
                              message.type
                            )}`}
                          >
                            {message.type.toUpperCase()}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <div className="text-foreground mt-1 break-words">
                          {message.message}
                        </div>
                        {message.details && (
                          <div className="text-muted-foreground mt-1 text-xs">
                            <details>
                              <summary className="cursor-pointer hover:text-foreground">
                                Details
                              </summary>
                              <pre className="mt-1 p-2 bg-muted/50 rounded text-xs overflow-x-auto">
                                {typeof message.details === "string"
                                  ? message.details
                                  : JSON.stringify(message.details, null, 2)}
                              </pre>
                            </details>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
