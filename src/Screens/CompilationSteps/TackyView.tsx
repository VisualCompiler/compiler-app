import { TackyNode } from './TackyNode'
interface TackyViewProps {
  tackyCode: any
}

export const TackyView: React.FC<TackyViewProps> = ({ tackyCode }) => {
  if (!tackyCode) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground">
          No Tacky Instructions are available
        </p>
      </div>
    )
  }

  return (
    <div className="p-2">
      <pre>
        <code>{tackyCode}</code>
      </pre>
    </div>
  )
}
