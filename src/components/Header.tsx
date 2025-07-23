import { cn } from '@/lib/utils'
import React, { type ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div className={cn("header flex justify-between bg-transparent p-2 items-center", className)}> 
        {children}
    </div>
  )
}
