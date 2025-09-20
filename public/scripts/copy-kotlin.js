import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(
  __dirname,
  '../../../compiler-logic/build/js/packages/CompilerLogic/kotlin'
)
const targetDir = path.join(__dirname, './kotlin-js')

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Copy all files from source to target
const files = fs.readdirSync(sourceDir)
files.forEach((file) => {
  const sourcePath = path.join(sourceDir, file)
  const targetPath = path.join(targetDir, file)

  if (fs.statSync(sourcePath).isFile()) {
    fs.copyFileSync(sourcePath, targetPath)
    console.log(`Copied: ${file}`)
  }
})

console.log('Kotlin JS files copied successfully!')
