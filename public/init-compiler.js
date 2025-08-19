// Initialize the Kotlin compiler module
import('./kotlin/CompilerLogic.mjs').then(module => {
  window.CompilerLogic = {
    CompilerExport: module.CompilerExport,
    ErrorType: {
      LEXICAL: 'LEXICAL',
      SYNTAX: 'SYNTAX',
      CODE_GENERATION: 'CODE_GENERATION',
      RUNTIME: 'RUNTIME',
      GENERAL: 'GENERAL'
    },
    CompilationStage: {
      LEXER: 'LEXER',
      PARSER: 'PARSER',
      CODE_GENERATOR: 'CODE_GENERATOR'
    }
  };
  console.log('CompilerLogic loaded and exposed to window:', window.CompilerLogic);
}).catch(error => {
  console.error('Failed to load CompilerLogic:', error);
});
