import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Terminal, Play } from 'lucide-react'
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

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()
  const navigate = useNavigate()
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
  const dummyText = Array(500)
    .fill(`Lorem ipsum dolor sit amet consectetur...`)
    .join('\n\n')

  if (!folderId || !fileId) {
    return <div>Missing folder or file ID</div>
  }

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="text-2xl font-semibold"
          aria-label="Back to Home Screen"
        >
          Visual Compiler
        </Button>
        <span>
          <ModeToggle />
        </span>
      </Header>
      <ResizablePanelGroup direction="vertical" className="p-4">
        <ResizablePanel defaultSize={20} className="border-none">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={3} className="bg-secondary/50 flex-shrink">
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
            <ResizableHandle />
            <ResizablePanel className="flex flex-col justify-center p-3">
              <ExpandToggleButton
                expanded={isRightFull}
                onToggle={() => setIsRightFull(!isRightFull)}
              />
              <Carousel className="ml-11 mr-11 h-full ">
                <CarouselContent>
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
        <ResizableHandle />
        <ResizablePanel defaultSize={10} className="bg-secondary/30">
          <Terminal className="m-2" />
          <Separator />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
