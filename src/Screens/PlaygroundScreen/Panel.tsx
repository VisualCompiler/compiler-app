import React, { type ReactNode } from 'react'

interface PanelProps {
  title?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

export const Panel: React.FC<PanelProps> = ({ title, actions, children, className }) => {
  return (
    <div className={`flex flex-col border bg-white rounded shadow-sm overflow-hidden ${className ?? ''}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <div className="flex items-center space-x-2">{actions}</div>
        </div>
      )}
      <div className="flex-1 overflow-auto p-2">{children}</div>
    </div>
  )
}
