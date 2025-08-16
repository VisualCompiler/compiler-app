interface AssemblyViewProps {
  asmCode: string;
}

export const AssemblyView: React.FC<AssemblyViewProps> = ({ asmCode }) => {
  if (!asmCode || asmCode.trim() === '') {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-muted-foreground'>No assembly code available</p>
      </div>
    );
  }

  return (
    <div>
      <pre className="rounded-md text-sm overflow-auto">
        {asmCode}
      </pre>
    </div>
  );
};
