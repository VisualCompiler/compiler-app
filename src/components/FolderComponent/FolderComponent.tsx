import { useContext, useState } from 'react'
import './index.scss'
import { PlaygroundContext } from '../../Providers/PlaygroundProvider'
import { modalConstants, ModalContext } from '../../Providers/ModalProvider'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

type FileType = {
  id: string
  title: string
}

type FolderProps = {
  folderTitle: string
  cards: FileType[]
  folderId: string
}

const Folder: React.FC<FolderProps> = ({ folderTitle, cards, folderId }) => {
  const playgroundContext = useContext(PlaygroundContext)
  const deleteFolder = playgroundContext?.deleteFolder
  const deleteFile = playgroundContext?.deleteFile
  const modalContext = useContext(ModalContext)
  const openModal = modalContext?.openModal
  const setModalPayload = modalContext?.setModalPayload
  const navigate = useNavigate()

  const [isExpanded, setIsExpanded] = useState(false) // Controls Files visibility

  const openCreateCardModal = () => {
    if (setModalPayload) setModalPayload(folderId)
    if (openModal) openModal(modalConstants.CREATE_CARD)
  }
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }
  function onDeleteFolder() {
    if (deleteFolder) {
      deleteFolder(folderId)
    }
  }

  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-item">
          <span className="material-symbols-outlined">folder_code</span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <Button>
            <span
              className="material-symbols-outlined"
              onClick={onDeleteFolder}
            >
              delete
            </span>
          </Button>

          <Button onClick={openCreateCardModal}>
            <span className="material-symbols-outlined">add</span>
          </Button>
          <Button onClick={toggleExpand}>
            <span
              className={`material-symbols-outlined ${
                isExpanded ? 'rotate-180' : ''
              }`}
              style={{ transition: 'transform 0.3s ease' }}
            >
              arrow_drop_down_circle
            </span>
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className="card-container">
          {cards?.map((file, index) => {
            const onDeleteFile = (e: React.MouseEvent) => {
              e.stopPropagation()
              if (deleteFile) {
                deleteFile(folderId, file.id)
              }
            }
            const navigateToPlayground = () => {
              navigate(`/playground/${folderId}/${file.id}`)
            }
            return (
              <div className="card" key={index} onClick={navigateToPlayground}>
                <img src="/code_blocks.png" alt="code" />
                <div className="card-title">
                  <span>{file?.title}</span>
                </div>
                <div className="card-element">
                  <Button onClick={onDeleteFile}>
                    <span className="material-symbols-outlined">delete</span>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const FolderComponent = () => {
  const playgroundContext = useContext(PlaygroundContext)
  const folders = playgroundContext?.folders
  console.log(folders)
  return (
    <div className="right-container">
      <div className="header">
        <h1>Playground</h1>
      </div>
      {folders?.map((folder, index) => {
        return (
          <Folder
            folderTitle={folder?.title}
            cards={folder?.files}
            folderId={folder?.id}
            key={index}
          />
        )
      })}
    </div>
  )
}
