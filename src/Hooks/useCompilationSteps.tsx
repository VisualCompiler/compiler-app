import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView'
import { TackyView } from '@/Screens/CompilationSteps/TackyView'
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import { useState, useCallback } from 'react'
import { XCircle } from 'lucide-react'
import {
  AssemblyOutput,
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

export interface TackyInstruction {
  sourceId: string
  _raw: any
}

export interface AssemblyInstruction {
  text: string
  astNodeId?: string
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
    tackyPseudoCode: string
    tackyInstructions: TackyInstruction[]
    asmCode: string
    asmInstructions: AssemblyInstruction[]
    errors: CompilationError[]
    stageOutputs: CompilationOutput[]
    hasCompiled: boolean
  }>({
    tokens: [],
    ast: null,
    tackyPseudoCode: '',
    tackyInstructions: [],
    asmCode: '',
    asmInstructions: [],
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
        tackyInstructions: [],
        asmCode: '',
        asmInstructions: [],
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

    const tackyJsonString = (tackyOutput as any)?.tacky || null
    const tackyProgram = tackyJsonString ? JSON.parse(tackyJsonString) : null

    const tackyInstructions = tackyProgram?.functions?.[0]?.body || []
    const tackyPseudoCode = (tackyOutput as any)?.tackyPretty || ''
    //const tacky = (tackyOutput as any)?.tacky || ''

    //console.log(tackyPseudoCode)
    const asmJsonString = (codeGenOutput as any)?.rawAssembly
    const asmProgram = asmJsonString ? JSON.parse(asmJsonString) : []
    const asmInstructions = asmProgram?.functions?.[0]?.body || []
    const asmCode = (codeGenOutput as any)?.assembly

    console.log('asmInstructions', asmInstructions)

    setCompilationResult({
      tokens,
      ast,
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
          ast={compilationResult.ast}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
      ),
    },
    {
      title: 'Program Execution',
      description: 'Generate x86-64 assembly code and trace execution',
      content: (
        <AssemblyView
          asmCodeForEmulator={compilationResult.asmCode}
          instructions={compilationResult.asmInstructions}
          ast={compilationResult.ast}
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
