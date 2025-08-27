import React from 'react';
import { Terminal, XCircle, CheckCircle } from 'lucide-react';
import type { ErrorType, CompilationError } from '../../../public/kotlin/CompilerLogic';

interface ConsoleProps {
  errors: CompilationError[];
  hasCompiled: boolean;
  sourceCode: string;
  getErrorInfo: (errorType: ErrorType) => { icon: React.ReactElement; label: string };
  className?: string;
}

export const Console: React.FC<ConsoleProps> = ({ errors, hasCompiled, sourceCode, getErrorInfo, className = '' }) => {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex items-center space-x-2 p-2 border-b bg-secondary">
        <Terminal className="h-4 w-4" />
        {hasCompiled && errors.length === 0 && sourceCode.trim() !== '' && (
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
      </div>
      
      <div className="flex-1 overflow-auto p-2 font-mono text-xs bg-secondary/30">
        {!hasCompiled && (
          <div className="text-gray-600">
            Click "Compile" to start compilation
          </div>
        )}
        
        {hasCompiled && sourceCode.trim() === '' && (
          <div className="text-yellow-600">
            ⚠ No source code provided
          </div>
        )}
        
        {hasCompiled && sourceCode.trim() !== '' && errors.length === 0 && (
          <div className="text-green-600">
            ✓ Compilation completed successfully
          </div>
        )}
        
        {hasCompiled && errors.map((error, index) => {
          const errorInfo = getErrorInfo(error.type);
          return (
            <div key={index} className="mb-2 p-2 bg-red-50/10 border border-red-500/40 rounded">
              <div className="flex items-start space-x-2">
                {errorInfo.icon}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-red-800">
                      {errorInfo.label}
                    </span>
                    {(error.line > 0 || error.column > 0) && (
                      <span className="text-red-600">
                        at line {error.line}, column {error.column}
                      </span>
                    )}
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
      </div>
    </div>
  );
};

