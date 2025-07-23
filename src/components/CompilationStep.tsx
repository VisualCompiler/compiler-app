import { CarouselItem } from "./ui/carousel"

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
    <p className="text-center text-sm text-muted-foreground mb-1">
      {description}
    </p>
    <div className="bg-secondary/30 overflow-scroll p-2 rounded-md">
      {children}
    </div>
  </CarouselItem>
)
