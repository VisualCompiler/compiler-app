import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Terminal, Play, Save } from 'lucide-react'
import { EditorContainer } from '@/components/EditorContainer'
import { ExpandToggleButton } from '@/components/ExpandToggleButton'
import { ModeToggle } from '@/components/mode-toggle'
import { Header } from '@/components/Header'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CompilationStep } from '@/components/CompilationStep'
import { PlaygroundContext } from '@/Providers/PlaygroundProvider'
import { usePlayground } from '@/Hooks/usePlayground'
import { Modal } from '../Providers/Modals/Modal'
import { modalConstants, ModalContext } from '../Providers/ModalProvider'

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()
  const navigate = useNavigate()

  const [code, setCode] = useState<string>('')
  const [isUnsaved, setIsUnsaved] = useState(false)
  const { getCode, saveCode, folders } = usePlayground()
  const modalFeatures = useContext(ModalContext)
  const SaveCardModal = () => {
    modalFeatures?.openModal(modalConstants.SAVE_CARD)
  }

  const compilationSteps = [
    {
      title: 'Token List',
      description: 'Building a token list from the source code',
    },
    {
      title: 'Abstract Syntax Tree (AST)',
      description: 'Building the Abstract Syntax Tree (AST)',
    },
    {
      title: 'Intermediate Representation (IR)',
      description:
        'Generating the Intermediate Representation (IR) with optimizations',
    },
    {
      title: 'Generated Code (WASM)',
      description: 'Translating the IR to WASM',
    },
  ]
  const [isLeftFull, setIsLeftFull] = useState(false)
  const [isRightFull, setIsRightFull] = useState(false)
  const isAnyPanelFull = isLeftFull || isRightFull

  useEffect(() => {
    if (folderId && fileId) {
      const code = getCode(fileId, folderId)
      setCode(code)
    }
  }, [folderId, fileId, getCode])

  // to prevent that both are full at the same time
  useEffect(() => {
    if (isLeftFull) setIsRightFull(false)
    if (isRightFull) setIsLeftFull(false)
  }, [isLeftFull, isRightFull])

  const dummyText = Array(500)
    .fill(`Lorem ipsum dolor sit amet consectetur...`)
    .join('\n\n')

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Button
          onClick={() => navigate('/Home')}
          variant="ghost"
          className="text-2xl font-semibold"
          aria-label="Back to Home Screen"
        >
          Visual Compiler
        </Button>
        <span>
          <ModeToggle />
        </span>
        <Button
          variant="outline"
          size="icon"
          aria-label="Save File"
          onClick={SaveCardModal}
        >
          <Save className="w-2" />
        </Button>
      </Header>

      <ResizablePanelGroup direction="vertical" className="p-4">
        <ResizablePanel defaultSize={20} className="border-none">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel
              defaultSize={isRightFull ? 0 : isLeftFull ? 100 : 50}
              minSize={isLeftFull ? 100 : 20}
              className="flex flex-col h-full"
              style={{
                display: isRightFull ? 'none' : 'flex', // hide if right is full
              }}
            >
              <Header className="h-11 sticky top-0 z-10 bg-secondary/30">
                <span className="text-lg font-semibold top-2 left-2 absolute">
                  Code Editor
                </span>
                <Button
                  variant={'blueGreenGradient'}
                  className="right-10 absolute"
                  aria-label="Compile Code"
                >
                  <Play className="w-2" />
                  <h2 className="">Compile</h2>
                </Button>
                <ExpandToggleButton
                  expanded={isLeftFull}
                  onToggle={() => setIsLeftFull(!isLeftFull)}
                />
              </Header>
              <Separator />
              <EditorContainer fileId={fileId} folderId={folderId} />
            </ResizablePanel>

            {/* Handle only shown when both panels visible */}
            {!isLeftFull && !isRightFull && <ResizableHandle />}
            <ResizableHandle />

            <ResizablePanel
              defaultSize={isLeftFull ? 0 : isRightFull ? 100 : 50}
              minSize={isRightFull ? 100 : 20}
              className="flex flex-col p-3 h-full"
              style={{
                display: isLeftFull ? 'none' : 'flex',
              }}
            >
              <ExpandToggleButton
                expanded={isRightFull}
                onToggle={() => setIsRightFull(!isRightFull)}
              />
              <Carousel className="ml-11 mr-11">
                <CarouselContent className="h-full">
                  {compilationSteps.map((step, index) => (
                    <CompilationStep
                      index={index}
                      title={step.title}
                      description={step.description}
                    >
                      {dummyText}
                    </CompilationStep>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        {!isAnyPanelFull && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={5} className="bg-secondary/30">
              <Terminal className="m-2" />
              <Separator />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
      <Modal />
    </div>
  )
}
