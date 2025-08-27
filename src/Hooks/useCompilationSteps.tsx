import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView'
import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import { useState, useCallback } from 'react'
import { XCircle, AlertTriangle, AlertCircle } from 'lucide-react'
import type {
  ErrorType,
  CompilationStage,
  CompilationError,
  CompilationOutput,
  CompilationResult,
} from '../../public/kotlin/CompilerLogic'

declare global {
  interface Window {
    CompilerLogic: {
      CompilerExport: new () => {
        exportCompilationResults(code: string): string
      }
      ErrorType: typeof ErrorType
      CompilationStage: {
        LEXER: CompilationStage
        PARSER: CompilationStage
        TACKY: CompilationStage
        CODE_GENERATOR: CompilationStage
      }
    }
  }
}

// Unified error handling function
const getErrorInfo = (errorType: ErrorType) => {
  switch (errorType) {
    case window.CompilerLogic?.ErrorType?.SYNTAX:
      return {
        icon: <XCircle className="h-3 w-3 text-red-500" />,
        label: 'Syntax Error',
      }
    case window.CompilerLogic?.ErrorType?.LEXICAL:
      return {
        icon: <AlertTriangle className="h-3 w-3 text-red-500" />,
        label: 'Lexical Error',
      }

    case window.CompilerLogic?.ErrorType?.CODE_GENERATION:
      return {
        icon: <AlertCircle className="h-3 w-3 text-red-500" />,
        label: 'Code Generation Error',
      }
    case window.CompilerLogic?.ErrorType?.RUNTIME:
      return {
        icon: <AlertCircle className="h-3 w-3 text-red-500" />,
        label: 'Runtime Error',
      }
    case window.CompilerLogic?.ErrorType?.GENERAL:
    default:
      return {
        icon: <AlertCircle className="h-3 w-3 text-gray-500" />,
        label: 'Compilation Error',
      }
  }
}

export const useCompilationSteps = () => {
  const [compilationResult, setCompilationResult] = useState<{
    tokens: any[]
    ast: any
    tackyPseudoCode: string

    asmCode: string
    errors: CompilationError[]
    stageOutputs: CompilationOutput[]
    hasCompiled: boolean
  }>({
    tokens: [],
    ast: null,
    tackyPseudoCode: '',
    asmCode: '',
    errors: [],
    stageOutputs: [],
    hasCompiled: false,
  })

  const compileCode = useCallback((sourceCode: string) => {
    if (!sourceCode.trim()) {
      setCompilationResult({
        tokens: [],
        ast: null,
        tackyPseudoCode: '',
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
    const lexerOutput = result.outputs.find((o) => o.stage === 'LEXER')

    console.log('1. Raw Lexer Output:', lexerOutput)
    const parserOutput = result.outputs.find((o) => o.stage === 'PARSER')
    console.log('2. Raw Parser Output:', parserOutput)

    const tackyOutput = result.outputs.find((o) => o.stage === 'TACKY')

    console.log('3. Raw Tacky Output:', tackyOutput)

    const codeGenOutput = result.outputs.find(
      (o) => o.stage === 'CODE_GENERATOR'
    )

    console.log('4. Raw Code Generator Output:', codeGenOutput)
    const tokens = (lexerOutput as any)?.tokens
      ? JSON.parse((lexerOutput as any).tokens)
      : []
    const ast = (parserOutput as any)?.ast
      ? JSON.parse((parserOutput as any).ast)
      : null

    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    console.log(tackyPseudoCode)
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
      asmCode,
      errors: result.overallErrors,
      stageOutputs: result.outputs,
      hasCompiled: true,
    })
  }, [])

  const steps = [
    {
      title: 'Token List',
      description: 'Building a token list from the source code',
      content: <TokenListContent tokenList={compilationResult.tokens} />,
    },
    {
      title: 'Abstract Syntax Tree (AST)',
      description: 'Building the AST from the token list',
      content: <ASTViewer ast={compilationResult.ast} />,
    },
    {
      title: 'Intermediate Representation (TACKY)',
      description: 'Building the Tacky Instructions from the AST',
      content: <TackyView tackyCode={compilationResult.tackyPseudoCode} />,
    },
    {
      title: 'Generated Assembly Code',
      description: 'Generated x64 assembly code from the AST',
      content: <AssemblyView asmCode={compilationResult.asmCode} />,
    },
  ]

  const [index, setIndex] = useState(0)

  return {
    currentStep: steps[index],
    index,
    next: () => setIndex((i) => (i + 1) % steps.length),
    prev: () => setIndex((i) => (i === 0 ? steps.length - 1 : i - 1)),
    errors: compilationResult.errors,
    stageOutputs: compilationResult.stageOutputs,
    hasCompiled: compilationResult.hasCompiled,
    compileCode,
    getErrorInfo,
  }
}
