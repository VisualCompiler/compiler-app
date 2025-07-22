import { useParams } from 'react-router-dom'
import { useState } from "react"
import { Maximize2, Minimize2 } from "lucide-react"

import { EditorContainer } from '../components/EditorContainer'
import { ModeToggle } from '@/components/mode-toggle'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()
  const compilationSteps = [
    {title: 'Token List', description: 'Building a token list from the source code'},
    {title: 'Abstract Syntax Tree (AST)', description: 'Building the Abstract Syntax Tree (AST)'},
    {title: 'Intermediate Representation (IR)', description: 'Generating the Intermediate Representation (IR) with optimizations'},
    {title: 'Generated Code (WASM)', description: 'Translating the IR to WASM'},
  ]
  const [isLeftFull, setIsLeftFull] = useState(false)
  const [isRightFull, setIsRightFull] = useState(false)

  if (!folderId || !fileId) {
    return <div>Missing folder or file ID</div>
  }

  return (
  <div className='flex flex-col m-2'>
    <div className="header pl-4 text-lg font-semibold flex justify-between">
      Visual Compiler
      <span><ModeToggle /></span>
    </div>
    <ResizablePanelGroup
      direction="horizontal"
      className="gap-2"
    >
      <ResizablePanel minSize={3}>
        <Button
          onClick={() => setIsLeftFull(!isLeftFull)}
          size="icon"
          variant="ghost"
          className="absolute top-1 right-1 z-10"
        >
          {isLeftFull ? <Minimize2 /> : <Maximize2 />}
        </Button>
        <EditorContainer fileId={fileId} folderId={folderId} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="flex flex-col justify-center p-1">
        <Carousel className="ml-11 mr-11">
          <CarouselContent className=''>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <h2 className="text-center text-xl font-bold tracking-tight text-balance">
                  Step {index + 1}: {compilationSteps[index].title}
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-1">
                  {compilationSteps[index].description}
                </p>
                <ResizablePanel className='relative border rounded-md h-[calc(100vh-120px)]'>
                  <Button
                    onClick={() => setIsRightFull(!isRightFull)}
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 z-10"
                  >
                    {isRightFull ? <Minimize2 /> : <Maximize2 />}
                  </Button>
                </ResizablePanel>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
  )
}