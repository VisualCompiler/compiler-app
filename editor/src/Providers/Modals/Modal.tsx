import { useContext } from 'react'
import { modalConstants, ModalContext } from '../ModalProvider'
import { CreatePlaygroundModal } from './CreatePlaygroundModal'
import { CreateCardModal } from './CreateCardModal'

export const Modal = () => {
  const modalFeatures = useContext(ModalContext)
  return (
    <>
      {modalFeatures && modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && (
        <CreatePlaygroundModal />
      )}
      {modalFeatures && modalFeatures.activeModal === modalConstants.CREATE_CARD && (
        <CreateCardModal />
      )}
    </>
  )
}
