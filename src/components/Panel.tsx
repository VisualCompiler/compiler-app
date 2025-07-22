import React, { type ReactNode } from 'react'

interface PanelProps {
  title?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

export const Panel: React.FC<PanelProps> = ({ title, actions, children, className }) => {
  return (
    <div className={`rounded-sm border flex flex-col overflow-hidden ${className ?? ''}`}>
      {(title || actions) && (
        <div className="flex">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <div className="flex items-center space-x-2">{actions}</div>
        </div>
      )}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
