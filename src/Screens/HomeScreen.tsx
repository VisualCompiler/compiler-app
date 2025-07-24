import { useContext } from 'react'
import { Modal } from '../Providers/Modals/Modal'
import { FolderComponent } from '../components/FolderComponent/FolderComponent'
import { Button } from '../components/ui/button'
import { modalConstants, ModalContext } from '../Providers/ModalProvider'
import { Header } from '@/components/Header'

export const HomeScreen: React.FC = () => {
  const modalFeatures = useContext(ModalContext)
  const openPlaygroundModal = () => {
    modalFeatures?.openModal(modalConstants.CREATE_PLAYGROUND)
  }
  return (
    <div className="">
      <Header className="bg-[#f4f4f4]">
        <h1 className="text-[#09090b] font-bold text-xl font-[Press Start 2P]">
          Visualize Your Code
        </h1>
        <h2 className="text-[#09090b] font-bold text-xl">
          Understand the Compilation Steps
        </h2>
        <Button onClick={openPlaygroundModal}>
          <span className="material-symbols-outlined">add</span>
          <span>Start Coding</span>
        </Button>
      </Header>
      <FolderComponent />
      <Modal />
    </div>
  )
}
