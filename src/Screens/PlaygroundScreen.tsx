import { useState, useEffect, useContext, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Play, Save, ChevronLeft, ChevronRight } from 'lucide-react'
import { EditorContainer } from '@/components/EditorContainer'
import { ExpandToggleButton } from '@/components/ExpandToggleButton'
import { ModeToggle } from '@/components/mode-toggle'
import { Header } from '@/components/Header'
import { Console } from '@/Screens/CompilationSteps/Console'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CompilationStep } from '@/Screens/CompilationSteps/CompilationStep'
import { usePlayground } from '@/Hooks/usePlayground'
import { Modal } from '../Providers/Modals/Modal'
import { modalConstants, ModalContext } from '../Providers/ModalProvider'
import { useCompilationSteps } from '@/Hooks/useCompilationSteps'

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()
  const navigate = useNavigate()

  const [code, setCode] = useState<string>('')
  const [sourceCode, setSourceCode] = useState<string>('')
  const [, setIsUnsaved] = useState(false)
  const [isCompiling, setIsCompiling] = useState(false)

  const { getCode, saveCode } = usePlayground()
  const modalFeatures = useContext(ModalContext)

  const {
    currentStep,
    index,
    next,
    prev,
    errors,
    hasCompiled,
    compileCode,
  } = useCompilationSteps()

  // This function updates the component's local state
  const handleCodeChange = useCallback((newCode: string) => {
    setCode(newCode)
    setIsUnsaved(true)
  }, [])

  const handleSave = () => {
    // Case 1: This is an existing file that we need to save
    if (folderId && fileId) {
      saveCode(folderId, fileId, code)
      setIsUnsaved(false)
    } else {
      // Case 2: This is a new, unsaved file. Open the modal to get a name/location.
      modalFeatures?.setModalPayload(code)
      modalFeatures?.openModal(modalConstants.SAVE_CARD)
    }
  }

  const handleCompile = () => {
    setIsCompiling(true)
    setSourceCode(code)
    compileCode(code)
    setTimeout(() => {
      setIsCompiling(false)
    }, 200) // TODO: make the delay dynamic based on the compilation time
  }

  const [isLeftFull, setIsLeftFull] = useState(false)
  const [isRightFull, setIsRightFull] = useState(false)
  const isAnyPanelFull = isLeftFull || isRightFull

  useEffect(() => {
    if (folderId && fileId) {
      const code = getCode(fileId, folderId)
      setCode(code)
      // When a file is loaded, it is considered saved
      setIsUnsaved(false)
    }
  }, [folderId, fileId, getCode])

  // to prevent that both are full at the same time
  useEffect(() => {
    if (isLeftFull) setIsRightFull(false)
    if (isRightFull) setIsLeftFull(false)
  }, [isLeftFull, isRightFull])

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Button
          onClick={() => navigate('/Home')}
          variant="ghost"
          className="text-2xl font-semibold"
          aria-label="Back to Home Screen"
        >
          <img src="/favicon.svg" alt="logo" className="w-8 mr-2" />
          Visual Compiler
        </Button>
        <span className="right-12 absolute">
          <ModeToggle />
        </span>
        <Button
          variant="outline"
          size="icon"
          aria-label="Save File"
          onClick={handleSave}
        >
          <Save className="w-2" />
        </Button>
      </Header>

      <ResizablePanelGroup direction="vertical" className="p-4">
        <ResizablePanel defaultSize={82} className="border-none">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel
              defaultSize={isRightFull ? 0 : isLeftFull ? 100 : 50}
              minSize={isLeftFull ? 100 : 20}
              className="flex flex-col h-full border-amber-700 border-1"
              style={{
                display: isRightFull ? 'none' : 'flex', // hide if right is full
              }}
            >
              <Header className="h-11 sticky top-0 z-10 bg-secondary overflow-clip">
                <span className="text-lg font-semibold top-2 left-2 absolute">
                  Code Editor
                </span>
                <Separator
                  orientation="vertical"
                  className="right-11 absolute"
                />
                <Button
                  variant={'ghost'}
                  className="right-12 top-1 absolute"
                  aria-label="Compile Code"
                  onClick={handleCompile}
                  disabled={isCompiling}
                >
                  <Play className="w-2" />
                  <h2 className="">
                    {isCompiling ? 'Compiling...' : 'Compile'}
                  </h2>
                </Button>
                <ExpandToggleButton
                  expanded={isLeftFull}
                  onToggle={() => setIsLeftFull(!isLeftFull)}
                />
              </Header>
              <Separator />
              <EditorContainer
                value={code}
                onChange={handleCodeChange}
                errors={errors}
              />
            </ResizablePanel>

            {/* Handle only shown when both panels visible */}
            {!isLeftFull && !isRightFull && <ResizableHandle />}

            <ResizablePanel
              defaultSize={isLeftFull ? 0 : isRightFull ? 100 : 50}
              minSize={isRightFull ? 100 : 45}
              className="flex flex-col bg-secondary/30"
              style={{
                display: isLeftFull ? 'none' : 'flex',
              }}
            >
              <ExpandToggleButton
                expanded={isRightFull}
                onToggle={() => setIsRightFull(!isRightFull)}
              />

              <CompilationStep {...currentStep} index={index} />

              <Separator />
              <div className="flex w-full bg-secondary">
                <Button
                  variant="ghost"
                  onClick={prev}
                  className="flex-1 rounded-none"
                >
                  <ChevronLeft color='orange' />
                </Button>
                <Separator orientation="vertical" />
                <Button
                  variant="ghost"
                  onClick={next}
                  className="flex-1 rounded-none"
                >
                  <ChevronRight color='orange' />
                </Button>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        {!isAnyPanelFull && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={18}>
              <Console
                errors={errors}
                hasCompiled={hasCompiled}
                sourceCode={sourceCode}
              />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
      <Modal />
    </div>
  )
}
