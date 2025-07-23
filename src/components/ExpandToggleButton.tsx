import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

interface ExpandToggleButtonProps {
  expanded: boolean
  onToggle: () => void
  className?: string
}

export const ExpandToggleButton: React.FC<ExpandToggleButtonProps> = ({
  expanded,
  onToggle,
  className = "absolute top-1 right-1 z-10",
}) => {
  return (
    <Button
      onClick={onToggle}
      size="icon"
      variant="ghost"
      className={className}
      aria-label="Expand/Collapse"
    >
      {expanded ? <Minimize2 /> : <Maximize2 />}
    </Button>
  )
}