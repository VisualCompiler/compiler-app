// Initialize the Kotlin compiler module
import('./kotlin/CompilerLogic.mjs')
  .then((module) => {
    window.CompilerLogic = {
      CompilerExport: module.CompilerExport,
    }
    console.log(
      'CompilerLogic loaded and exposed to window:',
      window.CompilerLogic
    )
  })
  .catch((error) => {
    console.error('Failed to load CompilerLogic:', error)
  })
