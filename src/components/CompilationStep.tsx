import { CarouselItem } from './ui/carousel'
interface CompilationStepProps {
  index: number
  title: string
  description: string
  children?: React.ReactNode
}

export const CompilationStep = ({
  index,
  title,
  description,
  children,
}: CompilationStepProps) => (
  <CarouselItem>
    <h2 className="text-center text-xl font-semibold tracking-tight text-balance">
      Step {index + 1}: {title}
    </h2>
    <p className="text-center text-sm text-muted-foreground mb-1 max-h-100">
      {description}
    </p>
    <div
      className="bg-secondary/30 p-5 max-h-100 overflow-auto
  [&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar]:p-0.5
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {/* check if we need <pre> tag to preserve formatting of the dummy text */}
      {children}
    </div>
  </CarouselItem>
)
