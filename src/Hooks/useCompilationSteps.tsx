import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ControlFlowGraphView } from '@/Screens/CompilationSteps/ControlFlowGraphView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import React, { useState, useCallback } from 'react'
import { XCircle } from 'lucide-react'
import {
  type CompilationError,
  type CompilationOutput,
  type CompilationResult,
} from '../../scripts/kotlin-js/CompilerLogic'
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

const parseInstructions = (raw: string | object) => {
  if (typeof raw === 'string') {
    // Ensure it's valid JSON by wrapping in []
    const fixed = `[${raw.trim().replace(/}\s*{/g, '},{')}]`
    return JSON.parse(fixed)
  }
  return raw
}

export const useCompilationSteps = () => {
  const [activeAstId, setActiveAstId] = useState<string | null>(null)
  const [activeLocation, setActiveLocation] = useState<SourceLocation | null>(
    null
  )

  console.log('Current activeLocation in hook:', activeLocation)

  // Shared optimization state
  const [selectedFunction, setSelectedFunction] = useState<string>('')
  const [enabledOptimizations, setEnabledOptimizations] = useState<Set<string>>(new Set())

  const [compilationResult, setCompilationResult] = useState<{
    tokens: any[]
    ast: any
    astNodeHashTable: AstNodeHashTable
    tackyPseudoCode: string
    tackyInstructions: TackyInstruction[]
    functionNames: string[]
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
    console.log('1. Raw Lexer Output:', lexerOutput)

    const parserOutput = result.outputs.find((o) => o.stage === 'parser')
    console.log('2. Raw Parser Output:', parserOutput)

    const tackyOutput = result.outputs.find((o) => o.stage === 'tacky')
    console.log('3. Raw Tacky Output:', tackyOutput)
    console.log('3. Tacky Output optimizations:', (tackyOutput as any)?.optimizations)
    console.log('3. Tacky Output functionNames:', (tackyOutput as any)?.functionNames)

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

    // Flatten all functions into a single array of instructions
    const tackyInstructions =
      tackyProgram?.functions?.flatMap((func: any) => func.body || []) || []
    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    // Remove empty lines from the pretty TACKY code
    const cleanTackyPseudoCode = tackyPseudoCode
      .split('\n')
      .filter((line: string) => line.trim() !== '')
      .join('\n')

    console.log('Tacky program:', tackyProgram)
    console.log('Tacky functions count:', tackyProgram?.functions?.length || 0)
    console.log('Tacky functions:', tackyProgram?.functions)
    tackyProgram?.functions?.forEach((func: any, index: number) => {
      console.log(
        `Function ${index}:`,
        func.name,
        'body length:',
        func.body?.length || 0
      )
      console.log(`Function ${index} body:`, func.body)
    })
    console.log('Tacky instructions:', tackyInstructions)
    console.log('Tacky instructions length:', tackyInstructions.length)
    //const tacky = (tackyOutput as any)?.tacky || ''

    //console.log(tackyPseudoCode)
    const rawAsmInstructions = (codeGenOutput as any)?.rawAssembly
    console.log('rawAsmInstructions:', rawAsmInstructions)
    console.log('rawAsmInstructions type:', typeof rawAsmInstructions)
    console.log('codeGenOutput keys:', Object.keys(codeGenOutput || {}))
    console.log('full codeGenOutput:', codeGenOutput)

    // Parse the raw assembly instructions if it's a string
    let asmInstructions: AssemblyInstruction = { body: [] }
    if (rawAsmInstructions) {
      if (typeof rawAsmInstructions === 'string') {
        try {
          const parsed = parseInstructions(rawAsmInstructions)
          console.log('Parsed raw assembly:', parsed)
          console.log('Is array?', Array.isArray(parsed))
          if (Array.isArray(parsed)) {
            console.log('Array length:', parsed.length)
            console.log('First function:', parsed[0])
          }

          // Handle the case where rawAssembly is a RawFunction object
          if (parsed.body && Array.isArray(parsed.body)) {
            // It's already in the correct format
            console.log('Using parsed as-is (single function with body)')
            asmInstructions = parsed
          } else if (parsed.name && parsed.body) {
            // It's a RawFunction, convert to AssemblyInstruction format
            console.log('Converting RawFunction to AssemblyInstruction format')
            asmInstructions = {
              body: parsed.body.map((inst: any) => ({
                code: inst.code,
                sourceId: inst.sourceId,
                astNodeId: undefined,
              })),
            }
          } else if (Array.isArray(parsed)) {
            // Handle array of functions - flatten all instructions into single body
            console.log('Processing array of functions')
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
            console.log(
              'Flattened instructions for multiple functions:',
              asmInstructions
            )
          } else {
            // Try to parse as an array of functions
            console.log('Using parsed as-is (fallback)')
            asmInstructions = parsed
          }
        } catch (e) {
          console.warn('Failed to parse assembly instructions:', e)
          asmInstructions = { body: [] }
        }
      } else {
        console.log(
          'rawAsmInstructions is not a string, using as-is:',
          rawAsmInstructions
        )
        asmInstructions = rawAsmInstructions
      }
    } else {
      // If rawAssembly is not available, try to generate instructions from the assembly code
      console.log(
        'No rawAsmInstructions, trying to generate from assembly code'
      )
      const asmCode = (codeGenOutput as any)?.assembly
      console.log('Assembly code available:', asmCode)
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

        console.log('Filtered instruction lines:', instructionLines)

        asmInstructions = {
          body: instructionLines.map((line, index) => ({
            code: line.trim(),
            sourceId: `generated_${index}`, // Generate a unique ID for each instruction
            astNodeId: undefined,
          })),
        }
        console.log(
          'Generated asmInstructions from assembly code:',
          asmInstructions
        )
      }
    }
    console.log('asmInstructions:', asmInstructions)

    const functionNames = (tackyOutput as any)?.functionNames || []
    const precomputedCFGs = (tackyOutput as any)?.precomputedCFGs || null
    const precomputedAssembly = (tackyOutput as any)?.precomputedAssembly || null
    console.log('PRECOMPUTED ASSEMBLY...', precomputedAssembly)
    const availableOptimizations = (tackyOutput as any)?.optimizations || ['CONSTANT_FOLDING', 'DEAD_STORE_ELIMINATION']
    const asmCode = (codeGenOutput as any)?.assembly || ''
    console.log('asmCode:', asmCode)

    console.log('Final asmInstructions:', asmInstructions)
    console.log(
      'Final asmInstructions.body length:',
      asmInstructions.body?.length
    )

    setCompilationResult({
      tokens,
      ast,
      astNodeHashTable,
      tackyPseudoCode: cleanTackyPseudoCode,
      tackyInstructions,
      functionNames,
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
    console.log('Initializing optimization state:', {
      functionNames: compilationResult.functionNames,
      availableOptimizations: compilationResult.availableOptimizations
    })
    
    if (compilationResult.functionNames.length > 0) {
      const defaultFunction = compilationResult.functionNames.includes('main') 
        ? 'main' 
        : compilationResult.functionNames[0]
      console.log('Setting selected function to:', defaultFunction)
      setSelectedFunction(defaultFunction)
    }
    if (compilationResult.availableOptimizations.length > 0) {
      console.log('Setting enabled optimizations to:', compilationResult.availableOptimizations)
      setEnabledOptimizations(new Set(compilationResult.availableOptimizations))
    }
  }, [compilationResult.functionNames, compilationResult.availableOptimizations])

  // Handle optimization toggle
  const handleOptimizationToggle = useCallback((optimization: string) => {
    setEnabledOptimizations(prev => {
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
    if (!selectedFunction || !compilationResult.precomputedAssembly) {
      return compilationResult.asmCode
    }

    try {
      const precomputedData = JSON.parse(compilationResult.precomputedAssembly)
      const sortedOpts = Array.from(enabledOptimizations).sort()
      
      console.log('Looking for assembly with:', {
        selectedFunction,
        enabledOptimizations: sortedOpts,
        precomputedDataLength: precomputedData.length
      })
      
      // Find the assembly entry that matches the selected function and optimizations
      const assemblyEntry = precomputedData.find((entry: any) => {
        const matches = entry.functionName === selectedFunction && 
          JSON.stringify(entry.optimizations) === JSON.stringify(sortedOpts)
        console.log('Checking entry:', {
          functionName: entry.functionName,
          optimizations: entry.optimizations,
          matches
        })
        return matches
      })
      
      console.log('Found assembly entry:', assemblyEntry)
      return assemblyEntry?.asmCode || compilationResult.asmCode
    } catch (error) {
      console.error('Error parsing precomputed assembly:', error)
      return compilationResult.asmCode
    }
  }, [selectedFunction, enabledOptimizations, compilationResult.precomputedAssembly, compilationResult.asmCode])

  // Current assembly based on optimization selections
  const currentAssembly = getOptimizedAssembly()


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
      title: 'Optimizations',
      description: 'Analyze control flow and apply optimizations',
      content: <ControlFlowGraphView 
        functionNames={compilationResult.functionNames} 
        precomputedCFGs={compilationResult.precomputedCFGs} 
        availableOptimizations={compilationResult.availableOptimizations}
        selectedFunction={selectedFunction}
        enabledOptimizations={enabledOptimizations}
        onFunctionSelect={handleFunctionSelection}
        onOptimizationToggle={handleOptimizationToggle}
      />,
    },
    {
      title: 'Program Execution',
      description: 'Generate x86-64 assembly code and trace execution',
      content: (
        <AssemblyView
          asmCode={currentAssembly}
          instructions={compilationResult.asmInstructions}
          astNodeHashTable={compilationResult.astNodeHashTable}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
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
