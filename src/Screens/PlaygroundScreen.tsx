import { useParams } from 'react-router-dom'
import { useState } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Terminal } from "lucide-react"
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
import { useNavigate } from 'react-router-dom'
import { Separator } from "@/components/ui/separator"

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()
  const navigate = useNavigate()
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
  <div className='flex flex-col p-4 h-screen'>
    <div className="header pl-2 flex justify-between bg-transparent mb-2">  
      <Button 
        onClick={() => navigate('/')}
        variant="ghost" 
        className="text-2xl font-semibold"
      >
        Visual Compiler
      </Button>
      <span><ModeToggle /></span>
    </div>
    <ResizablePanelGroup direction='vertical'>
      <ResizablePanel defaultSize={20}>
        <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={3} className='bg-secondary/50 border'>
          <div className='h-11'>
            <span className='text-lg font-semibold top-2 left-2 absolute'>Code Editor</span>
            <Button
              onClick={() => setIsLeftFull(!isLeftFull)}
              size="icon"
              variant="ghost"
              className="absolute top-1 right-1 z-10"
            >
              {isLeftFull ? <Minimize2 /> : <Maximize2 />}
            </Button>
          </div>
          <Separator />
          <EditorContainer fileId={fileId} folderId={folderId} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex flex-col justify-center p-1">
          <Carousel className="ml-11 mr-11 h-full">
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <h2 className="text-center text-xl font-semibold tracking-tight text-balance">
                    Step {index + 1}: {compilationSteps[index].title}
                  </h2>
                  <p className="text-center text-sm text-muted-foreground mb-1">
                    {compilationSteps[index].description}
                  </p>
                  <div className='border relative bg-secondary/20 overflow-scroll rounded-md p-3'>
                    <Button
                      onClick={() => setIsRightFull(!isRightFull)}
                      size="icon"
                      variant="ghost"
                      className="absolute top-1 right-1 z-10"
                    >
                      {isRightFull ? <Minimize2 /> : <Maximize2 />}
                    </Button>
                    <div className="flex items-center justify-center">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </div>
                  </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ResizablePanel>
      </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40} className='border bg-secondary/20'>
          <Terminal className='m-2'/>
        <Separator />
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
  )
}