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
      // Store the AST node ID in the location object for precise matching
      const locationWithId = {
        ...targetNode.location,
        astNodeId: targetNode.id,
      }
      setActiveLocation(locationWithId)
    }
  }

  const handleMouseLeave = () => {
    setActiveLocation(null)
  }
  const tackyLines = prettyTacky
    .split('\n')
    .filter((line) => line.trim() !== '')
  return (
    <div className="p-2 font-mono text-sm overflow-auto h-full">
      {tackyLines.map((line, index) => {
        const isHeader = index === 0
        const isFunctionDef = line.startsWith('def ') && line.endsWith(':')

        // skip header and function definitions
        let instructionIndex = -1
        if (!isHeader && !isFunctionDef) {
          let functionDefCount = 0
          for (let i = 1; i < index; i++) {
            if (
              tackyLines[i].startsWith('def ') &&
              tackyLines[i].endsWith(':')
            ) {
              functionDefCount++
            }
          }
          instructionIndex = index - 1 - functionDefCount
        }

        const instr =
          !isHeader &&
          !isFunctionDef &&
          instructionIndex >= 0 &&
          instructionIndex < instructions.length
            ? instructions[instructionIndex]
            : null

        const correspondingAstNode = instr
          ? findAstNodeById(astNodeHashTable, instr.sourceId)
          : null

        // Debug sourceId mapping for the problematic lines
        if (
          line.includes('tmp.0 = n.0 = 1') ||
          line.includes('if (tmp.0 == 0) goto .L_end_0') ||
          line.includes('return 1') ||
          line.includes('.L_end_0:')
        ) {
          console.log(`Line "${line}" has sourceId: ${instr?.sourceId}`)
          console.log(`Corresponding AST node:`, correspondingAstNode)
          if (correspondingAstNode) {
            console.log(`AST node location:`, correspondingAstNode.location)
          }
        }
        const isHighlighted =
          activeLocation &&
          correspondingAstNode &&
          (activeLocation as any).astNodeId === correspondingAstNode.id

        return (
          <div
            key={index}
            onMouseEnter={() => {
              if (instr && instr.sourceId) {
                console.log('TackyView received nodeId:', instr.sourceId)
                handleMouseEnter(instr.sourceId)
              }
            }}
            onMouseLeave={handleMouseLeave}
            // Apply conditional styling
            className={`whitespace-pre px-2 py-1 rounded-md transition-colors ${
              isHighlighted
                ? 'cm-highlighted-range'
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
