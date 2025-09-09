import type {
  AstNode,
  SourceLocation,
  TackyInstruction,
} from '@/Hooks/useCompilationSteps'

interface TackyViewProps {
  instructions: TackyInstruction[]
  prettyTacky: string
  ast: AstNode | null
  activeLocation: SourceLocation | null
  setActiveLocation: (location: SourceLocation | null) => void
}

const findAstNodeById = (node: AstNode | null, id: string): AstNode | null => {
  if (!node) return null
  if (node.id === id) return node

  if (node.children) {
    for (const childValue of Object.values(node.children)) {
      // Child can be a single node or an array of nodes
      if (Array.isArray(childValue)) {
        for (const item of childValue) {
          const result = findAstNodeById(item, id)
          if (result) return result
        }
      } else if (childValue && typeof childValue === 'object') {
        const result = findAstNodeById(childValue as AstNode, id)
        if (result) return result
      }
    }
  }
  return null
}

export const TackyView: React.FC<TackyViewProps> = ({
  instructions,
  prettyTacky,
  ast,
  activeLocation,
  setActiveLocation,
}) => {
  if (!instructions || instructions.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground">
          No Tacky instructions are available
        </p>
      </div>
    )
  }

  const handleMouseEnter = (astNodeId: string) => {
    if (!ast) return
    const targetNode = findAstNodeById(ast, astNodeId)
    if (targetNode && targetNode.location) {
      console.log('handleMouseEnter nodeId:', targetNode.id)

      setActiveLocation(targetNode.location)
    }
  }

  // Event handler for when the mouse leaves
  const handleMouseLeave = () => {
    setActiveLocation(null)
  }
  const tackyLines = prettyTacky.split('\n')
  return (
    <div className="p-2 font-mono text-sm overflow-auto h-full">
      {tackyLines.map((line, index) => {
        const isHeader = index === 0
        const instructionIndex = index - 1
        const instr = !isHeader ? instructions[instructionIndex] : null

        const correspondingAstNode = instr
          ? findAstNodeById(ast, instr.sourceId)
          : null
        const isHighlighted =
          activeLocation &&
          correspondingAstNode &&
          correspondingAstNode.location.startLine ===
            activeLocation.startLine &&
          correspondingAstNode.location.endLine === activeLocation.endLine &&
          correspondingAstNode.location.startColumn ===
            activeLocation.startColumn &&
          correspondingAstNode.location.endColumn === activeLocation.endColumn

        return (
          <div
            key={index}
            // Add the event handlers
            onMouseEnter={() => {
              console.log('TackyView received nodeId:', instr.sourceId)
              handleMouseEnter(instr.sourceId)
            }}
            onMouseLeave={handleMouseLeave}
            // Apply conditional styling
            className={`whitespace-pre px-2 py-1 rounded-md transition-colors ${
              isHighlighted
                ? 'bg-yellow-200 dark:bg-yellow-800'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {tackyLines[index]}
          </div>
        )
      })}
    </div>
  )
}
