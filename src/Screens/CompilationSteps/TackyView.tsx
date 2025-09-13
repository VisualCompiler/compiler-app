import type {
  AstNode,
  SourceLocation,
  TackyInstruction,
  AstNodeHashTable,
} from '@/Hooks/useCompilationSteps'

interface TackyViewProps {
  instructions: TackyInstruction[]
  prettyTacky: string
  astNodeHashTable: AstNodeHashTable
  activeLocation: SourceLocation | null
  setActiveLocation: (location: SourceLocation | null) => void
}

// Fast hash table lookup instead of recursive tree traversal
const findAstNodeById = (
  astNodeHashTable: AstNodeHashTable,
  id: string
): AstNode | null => {
  const entry = astNodeHashTable[id]
  return entry ? entry.node : null
}

export const TackyView: React.FC<TackyViewProps> = ({
  instructions,
  prettyTacky,
  astNodeHashTable,
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
    const targetNode = findAstNodeById(astNodeHashTable, astNodeId)
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
          ? findAstNodeById(astNodeHashTable, instr.sourceId)
          : null
        console.log()
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
