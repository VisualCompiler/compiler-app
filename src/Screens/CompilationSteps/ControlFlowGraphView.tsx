import React, { useState, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { CFGVisualization } from './CFGVisualization'

export interface CompilerExport {
  getCFGForFunction(
    precomputedCFGs: string | null,
    functionName: string,
    enabledOptimizations: string[]
  ): string
}

declare global {
  interface Window {
    CompilerLogic: {
      CompilerExport: new () => { 
        exportCompilationResults(code: string): string
      }
      CompilationStage: any
      CompilationError: any
      CompilationOutput: any
      CompilationResult: any
    }
  }
}

interface ControlFlowGraphViewProps {
  functionNames: string[]
  precomputedCFGs: string | null
  availableOptimizations: string[]
  selectedFunction?: string
  enabledOptimizations?: Set<string>
  onFunctionSelect?: (functionName: string) => void
  onOptimizationToggle?: (optimization: string) => void
}

export const ControlFlowGraphView: React.FC<ControlFlowGraphViewProps> = ({ 
  functionNames,
  precomputedCFGs,
  availableOptimizations,
  selectedFunction = '',
  enabledOptimizations = new Set(),
  onFunctionSelect,
  onOptimizationToggle
}) => {
  const [controlFlowGraph, setControlFlowGraph] = useState<any>(null)
  const [isOptimizing, setIsOptimizing] = useState(false)


  // Parse precomputed CFG data and get CFG for function when selections change
  const getCFGForFunction = useCallback(async () => {
    if (!selectedFunction || !precomputedCFGs) return

    setIsOptimizing(true)
    try {
      const precomputedData = JSON.parse(precomputedCFGs)
      const sortedOpts = Array.from(enabledOptimizations).sort()
      
      // Find the CFG entry that matches the selected function and optimizations
      const cfgEntry = precomputedData.find((entry: any) => 
        entry.functionName === selectedFunction && 
        JSON.stringify(entry.appliedOptimizations) === JSON.stringify(sortedOpts)
      )
      
      if (cfgEntry) {
        const parsedCfg = JSON.parse(cfgEntry.cfg)
        setControlFlowGraph(parsedCfg)
      } else {
        setControlFlowGraph(null)
      }
    } catch (error) {
      console.error('CFG: Error parsing precomputed CFG:', error)
      setControlFlowGraph(null)
    } finally {
      setIsOptimizing(false)
    }
  }, [precomputedCFGs, selectedFunction, enabledOptimizations])

  // Trigger CFG lookup when dependencies change
  useEffect(() => {
    if (selectedFunction && precomputedCFGs) {
      getCFGForFunction()
    }
  }, [selectedFunction, enabledOptimizations, precomputedCFGs, getCFGForFunction])

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center gap-4 p-2 border-b bg-secondary/30">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Function:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[120px] justify-between">
                {selectedFunction || 'Select function'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {functionNames.map((name) => (
                  <DropdownMenuItem
                    key={name}
                    onClick={() => onFunctionSelect?.(name)}
                    className={selectedFunction === name ? 'bg-accent' : ''}
                  >
                    {name}
                  </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Optimizations:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[150px] justify-between">
                {enabledOptimizations.size === 0 
                  ? 'None selected' 
                  : `${enabledOptimizations.size} selected`
                }
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Optimization Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {availableOptimizations.map((optimization: string) => (
                
                  <DropdownMenuCheckboxItem
                    key={optimization}
                    checked={enabledOptimizations.has(optimization)}
                    onCheckedChange={() => onOptimizationToggle?.(optimization)}
                  >
                    {optimization.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())}
                  </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isOptimizing && (
          <span className="text-sm text-muted-foreground">Optimizing...</span>
        )}
      </div>

      {/* Control Flow Graph Content */}
        <div className="flex-1 overflow-hidden">
          <CFGVisualization cfgData={controlFlowGraph} />
        </div>
    </div>
  )
}
