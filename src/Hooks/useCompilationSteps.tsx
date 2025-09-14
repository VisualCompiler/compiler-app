import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView'
import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ControlFlowGraphView } from '@/Screens/CompilationSteps/ControlFlowGraphView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import React, { useState, useCallback } from 'react'
import { XCircle } from 'lucide-react'
import type {
  CompilationError,
  CompilationOutput,
  CompilationResult,
} from '../../scripts/kotlin-js/CompilerLogic'


// Unified error handling function
const getErrorInfo = (errorStage: string) => {
    return {
      icon: <XCircle className="h-3 w-3 text-red-500" />,
      label: `${errorStage} stage failed`,
    }
  }

export const useCompilationSteps = () => {
  const [compilationResult, setCompilationResult] = useState<{
    tokens: any[]
    ast: any
    tackyPseudoCode: string
    functionNames: string[]
    precomputedCFGs: any
    precomputedAssembly: any
    availableOptimizations: string[]
    asmCode: string
    errors: CompilationError[]
    stageOutputs: CompilationOutput[]
    hasCompiled: boolean
  }>({
    tokens: [],
    ast: null,
    tackyPseudoCode: '',
    functionNames: [],
    precomputedCFGs: null,
    precomputedAssembly: null,
    availableOptimizations: [],
    asmCode: '',
    errors: [],
    stageOutputs: [],
    hasCompiled: false,
  })

  // Shared optimization state
  const [selectedFunction, setSelectedFunction] = useState<string>('')
  const [enabledOptimizations, setEnabledOptimizations] = useState<Set<string>>(new Set())

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

  const compileCode = useCallback((sourceCode: string) => {
    if (!sourceCode.trim()) {
      setCompilationResult({
        tokens: [],
        ast: null,
        tackyPseudoCode: '',
        functionNames: [],
        precomputedCFGs: null,
        precomputedAssembly: null,
        availableOptimizations: [],
        asmCode: '',
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

    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    const functionNames = (tackyOutput as any)?.functionNames || []
    const precomputedCFGs = (tackyOutput as any)?.precomputedCFGs || null
    const precomputedAssembly = (tackyOutput as any)?.precomputedAssembly || null
    console.log('PRECOMPUTED ASSEMBLY...', precomputedAssembly)
    const availableOptimizations = (tackyOutput as any)?.optimizations || ['CONSTANT_FOLDING']
    const asmCode = (codeGenOutput as any)?.assembly || ''
    console.log('--- Final Parsed Data for UI ---', {
      tokens,
      ast,
      tackyPseudoCode,
      asmCode,
    })

    setCompilationResult({
      tokens,
      ast,
      tackyPseudoCode,
      functionNames,
      precomputedCFGs,
      precomputedAssembly,
      availableOptimizations,
      asmCode,
      errors: result.overallErrors,
      stageOutputs: result.outputs,
      hasCompiled: true,
    })
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
      
      // Find the assembly entry that matches the selected function and optimizations
      const assemblyEntry = precomputedData.find((entry: any) => 
        entry.functionName === selectedFunction && 
        JSON.stringify(entry.optimizations) === JSON.stringify(sortedOpts)
      )
      
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
      description: 'Building the Abstract Syntax Tree (AST) from the token list',
      content: <ASTViewer ast={compilationResult.ast} />,
    },
    {
      title: 'Intermediate Representation (TACKY)',
      description: 'Building the Tacky Instructions from the AST',
      content: <TackyView 
        tackyCode={compilationResult.tackyPseudoCode}
        functionNames={compilationResult.functionNames}
        availableOptimizations={compilationResult.availableOptimizations}
        selectedFunction={selectedFunction}
        enabledOptimizations={enabledOptimizations}
        onFunctionSelect={handleFunctionSelection}
        onOptimizationToggle={handleOptimizationToggle}
      />,
    },
    {
      title: 'Optimizations',
      description: 'Analyze control flow and apply optimizations',
      content: <ControlFlowGraphView functionNames={compilationResult.functionNames} precomputedCFGs={compilationResult.precomputedCFGs} availableOptimizations={compilationResult.availableOptimizations} />,
    },
    {
      title: 'Program Execution',
      description: 'Generate x86-64 assembly code and trace execution',
      content: <AssemblyView 
        asmCode={currentAssembly} 
      />,
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
  }
}
