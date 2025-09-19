
import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ControlFlowGraphView } from '@/Screens/CompilationSteps/ControlFlowGraphView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import React, { useState, useCallback, useMemo } from 'react'
import { XCircle } from 'lucide-react'
import {
  CompilationResult,
  type CompilationError,
  type CompilationOutput,
} from '../../public/scripts/kotlin-js/CompilerLogic'
import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView'

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

export interface SourceLocation {
  startLine: number
  startCol: number
  endLine: number
  endCol: number
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

export interface AssemblyInstructions {
  [functionName: string]: {
    body: Array<{
      code: string
      sourceId?: string
      astNodeId?: string
    }>
    stackSize?: number
  }
}

// Function to extract all AST nodes and create a hash table
const extractAstNodes = (ast: any): AstNodeHashTable => {
  const hashTable: AstNodeHashTable = {}

  const traverse = (node: any, depth = 0) => {
    if (!node || typeof node !== 'object') return

    if (node.id && node.location) {
      hashTable[node.id] = {
        node: {
          id: node.id,
          location: node.location,
        },
        sourceLocation: node.location,
      }
    } else if (node.id) {
    }

    // Recursively traverse all object properties
    for (const [key, value] of Object.entries(node)) {
      if (key === 'id' || key === 'location') continue

      if (Array.isArray(value)) {
        value.forEach((item, _) => {
          traverse(item, depth + 1)
        })
      } else if (value && typeof value === 'object') {
        traverse(value, depth + 1)
      }
    }
  }

  traverse(ast)

  return hashTable
}

// Unified error handling function
const getErrorInfo = (errorStage: string) => {
  return {
    icon: <XCircle className="h-3 w-3 text-red-500" />,
    label: `${errorStage} stage failed`,
  }
}

const parseInstructions = (raw: string | object) => {
  if (typeof raw === 'string') {
    // Ensure it's valid JSON by wrapping in []
    const fixed = `[${raw.trim().replace(/}\s*{/g, '},{')}]`
    return JSON.parse(fixed)
  }
  return raw
}

export const useCompilationSteps = () => {
  const [activeLocation, setActiveLocation] = useState<SourceLocation | null>(
    null
  )

  // Shared optimization state
  const [selectedFunction, setSelectedFunction] = useState<string>('')
  const [enabledOptimizations, setEnabledOptimizations] = useState<Set<string>>(
    new Set()
  )

  const [compilationResult, setCompilationResult] = useState<{
    tokens: any[]
    ast: any
    astNodeHashTable: AstNodeHashTable
    tackyPseudoCode: string
    tackyInstructions: TackyInstruction[]
    functionNames: string[]
    hasMain: boolean
    precomputedCFGs: any
    precomputedAssembly: any
    availableOptimizations: string[]
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
    functionNames: [],
    hasMain: false,
    precomputedCFGs: null,
    precomputedAssembly: null,
    availableOptimizations: [],
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
        functionNames: [],
        hasMain: false,
        precomputedCFGs: null,
        precomputedAssembly: null,
        availableOptimizations: [],
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

    const parserOutput = result.outputs.find((o) => o.stage === 'parser')

    const tackyOutput = result.outputs.find((o) => o.stage === 'tacky')
    const codeGenOutput = result.outputs.find((o) => o.stage === 'assembly')

    const tokens = (lexerOutput as any)?.tokens
      ? JSON.parse((lexerOutput as any).tokens)
      : []

    // Debug: Log token structure

    const ast = (parserOutput as any)?.ast
      ? JSON.parse((parserOutput as any).ast)
      : null

    // Generate hash table for AST nodes
    const astNodeHashTable = ast ? extractAstNodes(ast) : {}

    const tackyJsonString = (tackyOutput as any)?.tacky || null
    const tackyProgram = tackyJsonString ? JSON.parse(tackyJsonString) : null

    // Flatten all functions into a single array of instructions
    const tackyInstructions =
      tackyProgram?.functions?.flatMap((func: any) => func.body || []) || []
    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    // Remove empty lines from the pretty TACKY code
    const cleanTackyPseudoCode = tackyPseudoCode
      .split('\n')
      .filter((line: string) => line.trim() !== '')
      .join('\n')

    //tackyProgram?.functions?.forEach((func: any, index: number) => {})

    //const tacky = (tackyOutput as any)?.tacky || ''

    //console.log(tackyPseudoCode)
    const rawAsmInstructions = (codeGenOutput as any)?.rawAssembly

    // Parse the raw assembly instructions if it's a string
    let asmInstructions: AssemblyInstruction = { body: [] }
    if (rawAsmInstructions) {
      if (typeof rawAsmInstructions === 'string') {
        try {
          const parsed = parseInstructions(rawAsmInstructions)

          if (Array.isArray(parsed)) {
          }

          // Handle the case where rawAssembly is a RawFunction object
          if (parsed.body && Array.isArray(parsed.body)) {
            // It's already in the correct format
            asmInstructions = parsed
          } else if (parsed.name && parsed.body) {
            // It's a RawFunction, convert to AssemblyInstruction format
            asmInstructions = {
              body: parsed.body.map((inst: any) => ({
                code: inst.code,
                sourceId: inst.sourceId,
                astNodeId: undefined,
              })),
            }
          } else if (Array.isArray(parsed)) {
            // Handle array of functions - flatten all instructions into single body
            const allInstructions: any[] = []
            parsed.forEach((func: any) => {
              if (func.body && Array.isArray(func.body)) {
                allInstructions.push(...func.body)
              }
            })
            asmInstructions = {
              body: allInstructions.map((inst: any) => ({
                code: inst.code,
                sourceId: inst.sourceId,
                astNodeId: undefined,
              })),
            }
          } else {
            asmInstructions = parsed
          }
        } catch (e) {
          console.warn('Failed to parse assembly instructions:', e)
          asmInstructions = { body: [] }
        }
      } else {
        asmInstructions = rawAsmInstructions
      }
    } else {
      // If rawAssembly is not available, try to generate instructions from the assembly code

      const asmCode = (codeGenOutput as any)?.assembly
      if (asmCode && typeof asmCode === 'string') {
        // Generate basic instruction structure from assembly code
        const lines = asmCode.split('\n')
        const instructionLines = lines.filter((line) => {
          const trimmed = line.trim()
          return (
            trimmed &&
            !trimmed.startsWith('.') &&
            !trimmed.endsWith(':') &&
            !trimmed.startsWith('//') &&
            !trimmed.startsWith(';')
          )
        })

        asmInstructions = {
          body: instructionLines.map((line, index) => ({
            code: line.trim(),
            sourceId: `generated_${index}`, // Generate a unique ID for each instruction
            astNodeId: undefined,
          })),
        }
      }
    }

    const functionNames = (tackyOutput as any)?.functionNames || []
    const hasMain = functionNames.includes('main')
    const precomputedCFGs = (tackyOutput as any)?.precomputedCFGs || null
    const precomputedAssembly =
      (tackyOutput as any)?.precomputedAssembly || null

    if (precomputedAssembly) {
      try {
        const parsed = JSON.parse(precomputedAssembly)

        if (parsed.length > 0) {
        }
      } catch (e) {
        console.error('ERROR PARSING PRECOMPUTED ASSEMBLY:', e)
      }
    }
    const availableOptimizations = (tackyOutput as any)?.optimizations || [
      'CONSTANT_FOLDING',
      'DEAD_STORE_ELIMINATION',
    ]
    const asmCode = (codeGenOutput as any)?.assembly || ''

    setCompilationResult({
      tokens,
      ast,
      astNodeHashTable,
      tackyPseudoCode: cleanTackyPseudoCode,
      tackyInstructions,
      functionNames,
      hasMain,
      precomputedCFGs,
      precomputedAssembly,
      availableOptimizations,
      asmCode,
      asmInstructions,
      errors: result.overallErrors,
      stageOutputs: result.outputs,
      hasCompiled: true,
    })
  }, [])

  // Initialize optimization state when compilation result changes
  const initializeOptimizationState = useCallback(() => {
    if (compilationResult.functionNames.length > 0) {
      const defaultFunction = compilationResult.functionNames.includes('main')
        ? 'main'
        : compilationResult.functionNames[0]
      setSelectedFunction(defaultFunction)
    }
    if (compilationResult.availableOptimizations.length > 0) {
      setEnabledOptimizations(new Set(compilationResult.availableOptimizations))
    }
  }, [
    compilationResult.functionNames,
    compilationResult.availableOptimizations,
  ])

  // Handle optimization toggle
  const handleOptimizationToggle = useCallback((optimization: string) => {
    setEnabledOptimizations((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(optimization)) {
        newSet.delete(optimization)
      } else {
        newSet.add(optimization)
      }
      return newSet
    })
  }, [])

  // Handle function selection
  const handleFunctionSelection = useCallback((functionName: string) => {
    setSelectedFunction(functionName)
  }, [])

  // Initialize optimization state when compilation result changes
  React.useEffect(() => {
    initializeOptimizationState()
  }, [initializeOptimizationState])

  // Parse precomputed assembly data and get optimized assembly based on current selections
  const getOptimizedAssembly = useCallback(() => {
    if (!compilationResult.precomputedAssembly) {
      return compilationResult.asmCode
    }

    try {
      const precomputedData = JSON.parse(compilationResult.precomputedAssembly)
      const sortedOpts = Array.from(enabledOptimizations).sort()


      // Find the assembly entry that matches the optimization set
      const assemblyEntry = precomputedData.find((entry: any) => {
        const matches = JSON.stringify(entry.optimizations) === JSON.stringify(sortedOpts)
        return matches
      })

      const result = assemblyEntry?.asmCode || compilationResult.asmCode
      return result
    } catch (error) {
      console.error('Error parsing precomputed assembly:', error)
      return compilationResult.asmCode
    }
  }, [
    enabledOptimizations,
    compilationResult.precomputedAssembly,
    compilationResult.asmCode,
  ])

  // Current assembly based on optimization selections
  const currentAssembly = getOptimizedAssembly()

  // Debug: Log when currentAssembly changes
  React.useEffect(() => {
  }, [currentAssembly, selectedFunction, enabledOptimizations])

  // Create stages array that updates when currentAssembly changes
  const stages = useMemo(
    () => [
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
        title: 'Optimizations',
        description: 'Analyze control flow and apply optimizations',
        content: (
          <ControlFlowGraphView
            functionNames={compilationResult.functionNames}
            precomputedCFGs={compilationResult.precomputedCFGs}
            availableOptimizations={compilationResult.availableOptimizations}
            selectedFunction={selectedFunction}
            enabledOptimizations={enabledOptimizations}
            onFunctionSelect={handleFunctionSelection}
            onOptimizationToggle={handleOptimizationToggle}
          />
        ),
      },
      {
        title: 'Program Execution',
        description: (
          <>
            Generate x86-64 assembly code and trace execution |{' '}
            <span className='text-amber-600'>
              Active optimizations: {enabledOptimizations.size}
            </span>
          </>
        ),
        content: (
          <AssemblyView
            asmCode={currentAssembly}
            instructions={compilationResult.asmInstructions}
            astNodeHashTable={compilationResult.astNodeHashTable}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
            hasMain={compilationResult.hasMain}
          />
        ),
      },
    ],
    [
      compilationResult,
      activeLocation,
      setActiveLocation,
      selectedFunction,
      enabledOptimizations,
      handleFunctionSelection,
      handleOptimizationToggle,
      currentAssembly,
    ]
  )

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
