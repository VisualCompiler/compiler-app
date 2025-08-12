interface AssemblyViewProps {
  asmCode: string;
}

export const AssemblyView: React.FC<AssemblyViewProps> = ({ asmCode }) => {
  return (
    <div>
      <pre className="rounded-md text-sm overflow-auto">
        {asmCode || 'No assembly code generated'}
      </pre>
    </div>
  );
};
