import React, { useContext } from 'react'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import { ModalContext, modalConstants } from '@/Providers/ModalProvider'

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
      variant="outline" 
      size="icon" 
      aria-label="Information"
      onClick={handleOpenInfo}
      className={className}
    >
      <Info className="w-4 h-4" />
    </Button>
  )
}
