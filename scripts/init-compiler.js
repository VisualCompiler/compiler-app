// Initialize the Kotlin compiler module
import('./kotlin-js/CompilerLogic.mjs')
  .then((module) => {
    window.CompilerLogic = {
      CompilerExport: module.CompilerExport,
      OptimizationTypeExport: module.OptimizationTypeExport,
      CompilationStage: module.CompilationStage,
      CompilationError: module.CompilationError,
      CompilationOutput: module.CompilationOutput,
      CompilationResult: module.CompilationResult,
    }
    console.log(
      'CompilerLogic loaded and exposed to window:',
      window.CompilerLogic
    )
  })
  .catch((error) => {
    console.error('Failed to load CompilerLogic:', error)
  })
