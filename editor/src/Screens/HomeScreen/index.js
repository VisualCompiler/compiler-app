import { useContext } from 'react'
import { Modal } from '../../Providers/Modals/Modal'
import './index.scss'
import { RightComponent } from './RightComponent'
import {
  modalConstants,
  ModalContext,
  ModalProvider,
} from '../../Providers/ModalProvider'

export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext)
  const openPlaygroundModal = () => {
    modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND)
  }
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="VC.png" />
          <h1>Visualize Your Code</h1>
          <h2>Understand the Compilation Steps</h2>
          <button onClick={openPlaygroundModal}>
            <span class="material-symbols-outlined">add</span>
            <span>Start Coding</span>
          </button>
        </div>
      </div>
      <RightComponent />
      <Modal />
    </div>
  )
}
