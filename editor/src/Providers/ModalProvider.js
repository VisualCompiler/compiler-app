import { createContext, useState } from 'react'

export const ModalContext = createContext()

export const modalConstants = {
  CREATE_PLAYGROUND: 'CREATE_PLAYGROUND',
  CREATE_CARD: 'CREATE_PLAYGROUND_CARD',
}

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null) // initial is null, no madal
  const [modalPayload, setModalPayload] = useState(null) // load payload
  const closeModal = () => {
    setModalType(null)
    setModalPayload(null)
  }
  const modalFeatures = {
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
