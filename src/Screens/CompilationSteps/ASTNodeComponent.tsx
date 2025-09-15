import type { SourceLocation } from '@/Hooks/useCompilationSteps'
import { Handle, Position } from 'react-flow-renderer'

// Single source of truth for AST node colors using theme-dependent CSS variables
const AST_COLORS: Record<string, string> = {
  Program: 'var(--color-program)',
  Function: 'var(--color-function)',
  Statement: 'var(--color-statement)',
  Expression: 'var(--color-expression)',
  ASTNode: 'var(--color-astnode)',
  Block: 'var(--color-block)',
  default: 'var(--color-default)',
} as const

// Export the color getter for nodes
export const getNodeColor = (nodeType: string): string => {
  return AST_COLORS[nodeType] || AST_COLORS.default
}

// Convert CSS variables to hex values for edge styling
export const getNodeHexColor = (nodeType: string): string => {
  const cssVar = getNodeColor(nodeType)
  // If it's already a hex color, return it
  if (cssVar.startsWith('#')) return cssVar

  // Convert CSS variable to hex
  const colorMap: Record<string, string> = {
    'var(--color-program)': '#16a34a',
    'var(--color-function)': '#ea580c',
    'var(--color-statement)': '#2563eb',
    'var(--color-expression)': '#ec4899',
    'var(--color-astnode)': '#ca8a04',
    'var(--color-block)': '#4f46e5',
    'var(--color-default)': '#9333ea',
  }
  return colorMap[cssVar] || '#6b7280'
}
interface ASTNodeComponentProps {
  label: string
  type: string
  location?: SourceLocation // Location is optional
  setActiveLocation: (location: SourceLocation | null) => void
  isActive: boolean
}

export const ASTNodeComponent = ({
  label,
  type,
  location,
  setActiveLocation,
  isActive,
}: any) => {
  const isHighlighted = isActive

  const backgroundColor = getNodeColor(type)

  if (location) {
    console.log(
      `AST Node "${label}" location: L${location.startLine}:C${location.startCol} to L${location.endLine}:C${location.endCol}`
    )
  }

  return (
    <div
      onClick={() => {
        console.log('Mouse Enter AST Node. Setting active location:', location)

        location && setActiveLocation(location)
      }}
      //onMouseLeave={() => setActiveLocation(null)}
      className={`text-xs px-2 py-1 rounded-md text-center text-white transition-all ${
        isHighlighted ? 'ring-2 ring-offset-2 ring-blue-500' : ''
      }`}
      style={{ backgroundColor: getNodeColor(type) }}
    >
      {label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
