import { AssemblyView } from '@/Screens/CompilationSteps/AssemblyView';
import { ASTViewer } from '@/Screens/CompilationSteps/ASTView'
import { TokenListContent } from '@/Screens/CompilationSteps/TokenListView'
import { useState, useMemo } from 'react'

declare global {
  interface Window {
    CompilerLogic: {
      JsonExport: new () => { exportCompilationResults(code: string): string[] };
    }
  }
}

export const useCompilationSteps = (sourceCode: string) => {
  const compilationResult = useMemo(() => {
    if (!sourceCode) {
      console.log('No source code provided');
      return { tokens: [], ast: null, asmCode: '' };
    }
    
    if (!window.CompilerLogic?.JsonExport) {
      console.log('CompilerLogic not available yet:', window.CompilerLogic);
      return { tokens: [], ast: null, asmCode: '' };
    }
    
    try {
      const jsonExport = new window.CompilerLogic.JsonExport();
      const results = jsonExport.exportCompilationResults(sourceCode);

      // results[0] = lexer.toJsonString() (tokens as JSON)
      // results[1] = ast.toJsonString() (AST as JSON)
      // results[2] = asm.toAsm(0) (assembly code as string)
      
      const tokens = results[0] ? JSON.parse(results[0]) : [];
      const ast = results[1] ? JSON.parse(results[1]) : null;
      const asmCode = results[2] || '';
      
      console.log('Parsed compilation results:', { tokens, ast, asmCode });
      
      return { tokens, ast, asmCode };
    } catch (error) {
      console.error('Error during compilation:', error);
      return { tokens: [], ast: null, asmCode: '' };
    }
  }, [sourceCode]);

  const steps = [
    {
      title: 'Token List',
      description: 'Building a token list from the source code',
      content: <TokenListContent tokenList={compilationResult.tokens} />
    },
    {
      title: 'Abstract Syntax Tree (AST)',
      description: 'Building the AST from the token list',
      content: <ASTViewer ast={compilationResult.ast} />
    },
    {
      title: 'Generated Assembly Code',
      description: 'Generated x64 assembly code from the AST',
      content: <AssemblyView asmCode={compilationResult.asmCode} />
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
