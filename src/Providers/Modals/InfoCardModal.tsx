import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../ModalProvider'
import { Button } from '@/components/ui/button'
import { X, Github } from 'lucide-react'

export const InfoCardModal = () => {
  const modalFeatures = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        modalFeatures?.closeModal()
      }
    }

    if (modalFeatures?.activeModal === 'INFO_CARD') {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalFeatures])

  if (!modalFeatures || modalFeatures.activeModal !== 'INFO_CARD') {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div 
        ref={modalRef}
        className="bg-background border rounded-lg p-6 max-w-md w-full mx-4 relative"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={modalFeatures.closeModal}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Visual Compiler</h2>
          <p className="text-sm">
            A visual compiler that transforms C code into x86-64 assembly with interactive execution.
          </p>

          <div className="space-y-2">
            <h3 className="font-medium">How to use:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
              <li>Write C code in the editor</li>
              <li>Click "Compile" to start the compilation process</li>
              <li>Navigate through compilation steps using the arrow buttons</li>
            </ol>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Supported Language Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li><b>Logical Operators:</b> <span className="font-mono text-primary">&nbsp;&&, ||</span></li>
              <li><b>Relational Operators:</b> <span className="font-mono text-primary">&nbsp;&lt;, &gt;, &lt;=, &gt;=, ==, !=</span></li>
              <li><b>Arithmetic Operators:</b> <span className="font-mono text-primary">&nbsp;+, -, *, /, %</span></li>
              <li><b>Unary Operators:</b> <span className="font-mono text-primary">&nbsp;-, !, ~</span></li>
              <li><b>Ternary Operator:</b> <span className="font-mono text-primary">&nbsp;?:</span></li>
              <li><b>Control Flow:</b> <span className="font-mono text-primary">&nbsp;if, else, while, for, do-while, break, continue, return</span></li>
              <li><b>Compound Statements:</b> <span className="font-mono text-primary">&nbsp;{'{'} ... {'}'}</span></li>
              <li><b>Local variables</b></li>
              <li><b>Data Types:</b> 
                <ul className="ml-4 mt-1 space-y-1">
                    <li><span className="font-mono text-primary">int</span> for return types and variables</li>
                    <li><span className="font-mono text-primary">int</span> and <span className="font-mono text-primary">void</span> for arguments</li>
                </ul>
              </li>
              <li><b>Functions</b></li>
            </ul>
          </div>

            <div className="space-y-2 flex flex-col items-center">
              <p>Found a bug or want to contribute? Visit our GitHub page:</p>
              <a 
                href="https://github.com/VisualCompiler" 
                className="inline-flex items-center gap-2 bg-gray-500 hover:bg-gray-400 p-2 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Visual Compiler
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
