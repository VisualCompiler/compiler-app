import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenList'
import { useState } from 'react'

export const useCompilationSteps = () => {
  const steps = [
    {
      title: 'Token List',
      description: 'Building a token list from the source code',
      content: <TokenListContent />
    },
    {
      title: 'Abstract Syntax Tree (AST)',
      description: 'Building the AST from the token list',
      content: <ASTViewer />
    },
    {
      title: 'Intermediate Representation (IR)',
      description: 'Generating the IR with optimizations',
      content: <></>
    },
    {
      title: 'Generated Code (WASM)',
      description: 'Translating IR to WebAssembly',
      content: <></>
    }
  ]

  const [index, setIndex] = useState(0)

  return {
    currentStep: steps[index],
    index,
    next: () => setIndex(i => (i + 1) % steps.length),
    prev: () => setIndex(i => (i === 0 ? steps.length - 1 : i - 1))
  }
}
