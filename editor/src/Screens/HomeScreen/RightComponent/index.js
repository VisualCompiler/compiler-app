import { useContext } from 'react'
import './index.scss'
import { PlaygroundContext } from '../../../Providers/PlaygroundProvider'
import { modalConstants, ModalContext } from '../../../Providers/ModalProvider'
import { useNavigate } from 'react-router-dom'

const Folder = ({ folderTitle, cards, folderId }) => {
  const { deleteFolder, deleteFile } = useContext(PlaygroundContext)
  const { openModal, setModalPayload } = useContext(ModalContext)
  const navigate = useNavigate()
  const onDeleteFolder = () => {
    deleteFolder(folderId)
  }

  const openCreateCardModal = () => {
    setModalPayload(folderId)
    openModal(modalConstants.CREATE_CARD)
  }
  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-item">
          <span class="material-symbols-outlined">folder_code</span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <button>
            <span class="material-symbols-outlined" onClick={onDeleteFolder}>
              delete
            </span>
          </button>

          <button onClick={openCreateCardModal}>
            <span class="material-symbols-outlined">add</span>
          </button>
          <button>
            <span class="material-symbols-outlined">
              arrow_drop_down_circle
            </span>
          </button>
        </div>
      </div>
      <div className="card-container">
        {cards?.map((file, index) => {
          const onDeleteFile = () => {
            deleteFile(folderId, file.id)
          }
          const navigateToPlayground = () => {
            navigate(`/playground/${folderId}/${file.id}`)
          }
          return (
            <div className="card" key={index} onClick={navigateToPlayground}>
              <img src="code_blocks.png" />
              <div className="card-title">
                <span>{file?.title}</span>
              </div>
              <div className="card-element">
                <button>
                  <span
                    class="material-symbols-outlined"
                    onClick={onDeleteFile}
                  >
                    delete
                  </span>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const RightComponent = () => {
  const { folders } = useContext(PlaygroundContext)
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
            fileId={folder?.files.id}
            key={index}
          />
        )
      })}
    </div>
  )
}
