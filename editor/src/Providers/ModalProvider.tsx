import { createContext, useState, type ReactNode } from 'react'

interface ModalContextType {
  openModal: (type: string) => void
  closeModal: () => void
  activeModal: string | null
  modalPayload: any
  setModalPayload: (payload: any) => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const modalConstants = {
  CREATE_PLAYGROUND: 'CREATE_PLAYGROUND',
  CREATE_CARD: 'CREATE_PLAYGROUND_CARD',
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalType, setModalType] = useState<string | null>(null) // initial is null, no madal
  const [modalPayload, setModalPayload] = useState<any>(null) // load payload
  const closeModal = () => {
    setModalType(null)
    setModalPayload(null)
  }
  const modalFeatures: ModalContextType = {
    openModal: setModalType,
    closeModal,
    activeModal: modalType,
    modalPayload,
    setModalPayload,
  }
  return (
    <ModalContext.Provider value={modalFeatures}>
      {children}
    </ModalContext.Provider>
  )
}
