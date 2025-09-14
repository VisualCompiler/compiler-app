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
        getCFGForFunction(precomputedCFGs: string | null, functionName: string, enabledOptimizations: string[]): string
        getOptimizedAssemblyForFunction(precomputedAssembly: string | null, functionName: string, enabledOptimizations: string[]): string
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
}

export const ControlFlowGraphView: React.FC<ControlFlowGraphViewProps> = ({ 
  functionNames,
  precomputedCFGs,
  availableOptimizations
}) => {
  const [selectedFunction, setSelectedFunction] = useState<string>('')
  const [enabledOptimizations, setEnabledOptimizations] = useState<Set<string>>(new Set(availableOptimizations))
  const [controlFlowGraph, setControlFlowGraph] = useState<any>(null)
  const [isOptimizing, setIsOptimizing] = useState(false)

  // Initialize selected function when functionNames change
  useEffect(() => {
    if (functionNames.length > 0) {
      const defaultFunction = functionNames.includes('main') ? 'main' : functionNames[0]
      setSelectedFunction(defaultFunction)
    }
  }, [functionNames])

  // Get CFG for function when selections change
  const getCFGForFunction = useCallback(async () => {
    if (!selectedFunction || !precomputedCFGs) return

    setIsOptimizing(true)
    try {
      const compilerExport = new window.CompilerLogic.CompilerExport()
      const cfgJson = compilerExport.getCFGForFunction(
        precomputedCFGs,
        selectedFunction,
        Array.from(enabledOptimizations).sort()
      )
      const parsedCfg = JSON.parse(cfgJson)
      setControlFlowGraph(parsedCfg)
    } catch (error) {
      console.error('CFG: Error getting CFG:', error)
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

  const handleOptimizationToggle = (optimization: string) => {
    setEnabledOptimizations(prev => {
      const newSet = new Set(prev)
      if (newSet.has(optimization)) {
        newSet.delete(optimization)
      } else {
        newSet.add(optimization)
      }
      return newSet
    })
  }
console.log(availableOptimizations)

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
                  onClick={() => setSelectedFunction(name)}
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
                  onCheckedChange={() => handleOptimizationToggle(optimization)}
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
