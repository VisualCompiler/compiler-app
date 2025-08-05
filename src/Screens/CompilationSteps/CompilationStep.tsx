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
  <div className="flex flex-col h-full">
    <div className="shrink-0 px-4 pt-2 pb-1">
      <h2 className="text-center text-xl font-semibold text-balance">
        Step {index + 1}: {title}
      </h2>
      <p className="text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>

    <div
      className="flex-grow overflow-auto bg-secondary/30 p-5
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar]:p-0.5
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {content}
      {children}
    </div>
  </div>
)
