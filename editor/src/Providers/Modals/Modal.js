import { useContext } from 'react'
import { modalConstants, ModalContext } from '../ModalProvider'
import { CreatePlaygroundModal } from './CreatePlaygroundModal'

export const Modal = () => {
  const modalFeatures = useContext(ModalContext)
  return (
    <>
      {modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && (
        <CreatePlaygroundModal />
      )}
    </>
  )
}
