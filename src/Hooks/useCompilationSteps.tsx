// import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView'
import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import { useState, useCallback } from 'react'
import { XCircle } from 'lucide-react'
import {
  type CompilationError,
  type CompilationOutput,
  type CompilationResult,
} from '../../scripts/kotlin-js/CompilerLogic'

declare global {
  interface Window {
    CompilerLogic: {
      CompilerExport: new () => {
        exportCompilationResults(code: string): string
      }
    }
  }
}

export interface SourceLocation {
  startLine: number
  startColumn: number
  endLine: number
  endColumn: number
}
export interface AstNode {
  id: string
  location: SourceLocation
}

export interface AstNodeHashTable {
  [nodeId: string]: {
    node: AstNode
    sourceLocation: SourceLocation
  }
}

export interface TackyInstruction {
  sourceId: string
  _raw: any
}

export interface AssemblyInstruction {
  body: Array<{
    code: string
    sourceId?: string
    astNodeId?: string
  }>
}

// Function to extract all AST nodes and create a hash table
const extractAstNodes = (ast: any): AstNodeHashTable => {
  const hashTable: AstNodeHashTable = {}

  const traverse = (node: any, depth = 0) => {
    if (!node || typeof node !== 'object') return

    if (node.id && node.location) {
      console.log(
        'Found AST node with ID:',
        node.id,
        'Location:',
        node.location,
        'Depth:',
        depth
      )
      hashTable[node.id] = {
        node: {
          id: node.id,
          location: node.location,
        },
        sourceLocation: node.location,
      }
    } else if (node.id) {
      console.log(
        'Found AST node with ID but no location:',
        node.id,
        'Node:',
        node,
        'Depth:',
        depth
      )
    }

    // Recursively traverse all object properties
    for (const [key, value] of Object.entries(node)) {
      if (key === 'id' || key === 'location') continue

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          console.log(`Traversing array item at ${key}[${index}]:`, item)
          traverse(item, depth + 1)
        })
      } else if (value && typeof value === 'object') {
        console.log(`Traversing object property ${key}:`, value)
        traverse(value, depth + 1)
      }
    }
  }

  console.log('Starting AST traversal with root:', ast)
  traverse(ast)
  console.log(
    'AST traversal complete. Total nodes found:',
    Object.keys(hashTable).length
  )
  return hashTable
}

// Unified error handling function
const getErrorInfo = (errorStage: string) => {
  return {
    icon: <XCircle className="h-3 w-3 text-red-500" />,
    label: `${errorStage} stage failed`,
  }
}

export const useCompilationSteps = () => {
  const [activeAstId, setActiveAstId] = useState<string | null>(null)
  const [activeLocation, setActiveLocation] = useState<SourceLocation | null>(
    null
  )

  console.log('Current activeLocation in hook:', activeLocation)

  const [compilationResult, setCompilationResult] = useState<{
    tokens: any[]
    ast: any
    astNodeHashTable: AstNodeHashTable
    tackyPseudoCode: string
    tackyInstructions: TackyInstruction[]
    asmCode: string
    asmInstructions: AssemblyInstruction
    errors: CompilationError[]
    stageOutputs: CompilationOutput[]
    hasCompiled: boolean
  }>({
    tokens: [],
    ast: null,
    astNodeHashTable: {},
    tackyPseudoCode: '',
    tackyInstructions: [],
    asmCode: '',
    asmInstructions: { body: [] },
    errors: [],
    stageOutputs: [],
    hasCompiled: false,
  })

  const compileCode = useCallback((sourceCode: string) => {
    if (!sourceCode.trim()) {
      setCompilationResult({
        tokens: [],
        ast: null,
        astNodeHashTable: {},
        tackyPseudoCode: '',
        tackyInstructions: [],
        asmCode: '',
        asmInstructions: { body: [] },
        errors: [],
        stageOutputs: [],
        hasCompiled: true,
      })
      return
    }

    const compilerExport = new window.CompilerLogic.CompilerExport()
    const resultJson = compilerExport.exportCompilationResults(sourceCode)
    const result: CompilationResult = JSON.parse(resultJson)

    // Extract data from each stage
    const lexerOutput = result.outputs.find((o) => o.stage === 'lexer')
    console.log('1. Raw Lexer Output:', lexerOutput)

    const parserOutput = result.outputs.find((o) => o.stage === 'parser')
    console.log('2. Raw Parser Output:', parserOutput)

    const tackyOutput = result.outputs.find((o) => o.stage === 'tacky')
    console.log('3. Raw Tacky Output:', tackyOutput)

    const codeGenOutput = result.outputs.find((o) => o.stage === 'assembly')
    console.log('4. Raw Code Generator Output:', codeGenOutput)

    const tokens = (lexerOutput as any)?.tokens
      ? JSON.parse((lexerOutput as any).tokens)
      : []
    const ast = (parserOutput as any)?.ast
      ? JSON.parse((parserOutput as any).ast)
      : null

    // Generate hash table for AST nodes
    const astNodeHashTable = ast ? extractAstNodes(ast) : {}
    console.log('Generated AST node hash table:', astNodeHashTable)
    console.log('Hash table keys:', Object.keys(astNodeHashTable))
    console.log('Looking for sourceId: 8650988911001402694')
    console.log('Found in hash table:', astNodeHashTable['8650988911001402694'])

    const tackyJsonString = (tackyOutput as any)?.tacky || null
    const tackyProgram = tackyJsonString ? JSON.parse(tackyJsonString) : null

    const tackyInstructions = tackyProgram?.functions?.[0]?.body || []
    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    //const tacky = (tackyOutput as any)?.tacky || ''

    //console.log(tackyPseudoCode)
    const rawAsmInstructions = (codeGenOutput as any)?.rawAssembly
    console.log('rawAsmInstructions:', rawAsmInstructions)

    // Parse the raw assembly instructions if it's a string
    let asmInstructions: AssemblyInstruction = { body: [] }
    if (rawAsmInstructions) {
      if (typeof rawAsmInstructions === 'string') {
        try {
          const parsed = JSON.parse(rawAsmInstructions)
          asmInstructions = parsed
        } catch (e) {
          console.warn('Failed to parse assembly instructions:', e)
          asmInstructions = { body: [] }
        }
      } else {
        asmInstructions = rawAsmInstructions
      }
    }
    console.log('asmInstructions:', asmInstructions)

    const asmCode = (codeGenOutput as any)?.assembly
    console.log('asmCode:', asmCode)

    setCompilationResult({
      tokens,
      ast,
      astNodeHashTable,
      tackyPseudoCode,
      tackyInstructions,
      asmCode,
      asmInstructions,
      errors: result.overallErrors,
      stageOutputs: result.outputs,
      hasCompiled: true,
    })
  }, [])

  const stages = [
    {
      title: 'Lexer',
      description: 'Building a token list from the source code',
      content: <TokenListContent tokenList={compilationResult.tokens} />,
    },
    {
      title: 'Parser & Semantic Analysis',
      description:
        'Building the Abstract Syntax Tree (AST) from the token list',
      content: (
        <ASTViewer
          ast={compilationResult.ast}
          activeAstId={activeAstId}
          setActiveAstId={setActiveAstId}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
      ),
    },
    {
      title: 'Intermediate Representation (TACKY)',
      description: 'Building the Tacky Instructions from the AST',
      content: (
        <TackyView
          instructions={compilationResult.tackyInstructions}
          prettyTacky={compilationResult.tackyPseudoCode}
          astNodeHashTable={compilationResult.astNodeHashTable}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
      ),
    },
    {
      title: 'Program Execution',
      description: 'Generate x86-64 assembly code and trace execution',
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-muted-foreground">
            Assembly View temporarily unavailable
          </p>
        </div>
      ),
    },
  ]

  const [index, setIndex] = useState(0)

  return {
    currentStep: stages[index],
    index,
    next: () => setIndex((i) => (i + 1) % stages.length),
    prev: () => setIndex((i) => (i === 0 ? stages.length - 1 : i - 1)),
    errors: compilationResult.errors,
    stageOutputs: compilationResult.stageOutputs,
    hasCompiled: compilationResult.hasCompiled,
    compileCode,
    getErrorInfo,
    activeLocation,
    setActiveLocation,
  }
}
