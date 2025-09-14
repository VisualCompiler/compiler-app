import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface TackyViewProps {
  tackyCode: any
  functionNames?: string[]
  availableOptimizations?: string[]
  selectedFunction?: string
  enabledOptimizations?: Set<string>
  onFunctionSelect?: (functionName: string) => void
  onOptimizationToggle?: (optimization: string) => void
}

export const TackyView: React.FC<TackyViewProps> = ({ 
  tackyCode,
  functionNames = [],
  availableOptimizations = [],
  selectedFunction = '',
  enabledOptimizations = new Set(),
  onFunctionSelect,
  onOptimizationToggle
}) => {
  if (!tackyCode) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground">
          No Tacky instructions are available
        </p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Optimization Controls */}
      {functionNames.length > 0 && availableOptimizations.length > 0 && (
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
        </div>
      )}

      {/* Tacky Code Display */}
      <div className="flex-1 overflow-auto p-2">
        <pre>
          <code>{tackyCode}</code>
        </pre>
      </div>
    </div>
  )
}
