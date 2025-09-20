import React, { useContext } from 'react'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import { ModalContext, modalConstants } from '@/Providers/ModalProvider'
import { cn } from '@/lib/utils'

interface InfoPopUpProps {
  className?: string
}

export const InfoPopUp: React.FC<InfoPopUpProps> = ({ className }) => {
  const modalFeatures = useContext(ModalContext)

  const handleOpenInfo = () => {
    modalFeatures?.openModal(modalConstants.INFO_CARD)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="Information"
      onClick={handleOpenInfo}
      className={cn("bg-gradient-to-br from-orange-700/50 via-amber-600/50 to-yellow-500/50 hover:bg-gradient-to-br", className)}
    >
      <Info className="w-4 h-4" />
    </Button>
  )
}
