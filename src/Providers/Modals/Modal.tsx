import { useContext } from 'react'
import { modalConstants, ModalContext } from '../ModalProvider'
import { CreatePlaygroundModal } from './CreatePlaygroundModal'
import { CreateCardModal } from './CreateCardModal'
import { SaveCardModal } from './SaveCardModal'
import { InfoCardModal } from './InfoCardModal'

export const Modal = () => {
  const modalFeatures = useContext(ModalContext)
  return (
    <>
      {modalFeatures &&
        modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && (
          <CreatePlaygroundModal />
        )}
      {modalFeatures &&
        modalFeatures.activeModal === modalConstants.CREATE_CARD && (
          <CreateCardModal />
        )}
      {modalFeatures &&
        modalFeatures.activeModal === modalConstants.SAVE_CARD && (
          <SaveCardModal />
        )}
      {modalFeatures &&
        modalFeatures.activeModal === modalConstants.INFO_CARD && (
          <InfoCardModal />
        )}
    </>
  )
}
