import { useContext } from 'react'
import { Modal } from '../Providers/Modals/Modal'
import { FolderComponent } from '../components/FolderComponent/FolderComponent'
import { Button } from '../components/ui/button'
import { modalConstants, ModalContext } from '../Providers/ModalProvider'
import { Header } from '@/components/Header'
import { Separator } from '@/components/ui/separator'

export const HomeScreen: React.FC = () => {
  const modalFeatures = useContext(ModalContext)
  const openPlaygroundModal = () => {
    modalFeatures?.openModal(modalConstants.CREATE_PLAYGROUND)
  }
  return (
    <div className="">
      <Header>
        <h1 className="">Visualize Your Code</h1>
        <h2>Understand the Compilation Steps</h2>
        <Button onClick={openPlaygroundModal}>
          <span className="material-symbols-outlined">add</span>
          <span>Start Coding</span>
        </Button>
      </Header>
      <Separator />
      <FolderComponent />
      <Modal />
    </div>
  )
}
