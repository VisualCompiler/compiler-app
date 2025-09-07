import { Separator } from '@/components/ui/separator'

interface CompilationStepProps {
  index: number
  title: string
  description: string
  content: React.ReactNode
  children?: React.ReactNode
}

export const CompilationStep = ({
  index,
  title,
  description,
  content,
  children,
}: CompilationStepProps) => (
  <div className="flex flex-col h-full flex-grow min-h-0">
    <div className="pt-2 pb-2 flex flex-col bg-secondary">
      <h2 className="text-center text-xl font-semibold text-balance">
        Stage {index + 1}: {title}
      </h2>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
    </div>
    <Separator />
    <div className="flex-grow overflow-auto min-h-0">
      {content}
      {children}
    </div>
  </div>
)
