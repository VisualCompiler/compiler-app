import { useContext, useState } from 'react'
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
    <div className="mt-6">
      <div className="flex justify-between py-2 border-b border-[#09090b] ">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined">folder_code</span>
          <span>{folderTitle}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button className="p-1  hover:shadow-md" onClick={onDeleteFolder}>
            <span className="material-symbols-outlined">delete</span>
          </Button>
          <Button className="p-1 hover:shadow-md" onClick={openCreateCardModal}>
            <span className="material-symbols-outlined">add</span>
          </Button>
          <Button className="p-1 hover:shadow-md" onClick={toggleExpand}>
            <span
              className={`material-symbols-outlined transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            >
              arrow_drop_down_circle
            </span>
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 flex flex-wrap gap-5 ">
          {cards?.map((file, index) => {
            const onDeleteFile = (e: React.MouseEvent) => {
              e.stopPropagation()
              if (deleteFile) deleteFile(folderId, file.id)
            }

            const navigateToPlayground = () => {
              navigate(`/playground/${folderId}/${file.id}`)
            }

            return (
              <div
                key={index}
                onClick={navigateToPlayground}
                className="flex w-[32%] gap-2 rounded-lg shadow-md justify-between items-center p-3 cursor-pointer transition duration-500 hover:shadow-xl  hover:outline-4 hover:outline-[#fe7743] border border-gray-300"
              >
                <span className="material-symbols-outlined">folder_code</span>
                <div className="flex flex-col  ">
                  <span>{file?.title}</span>
                </div>
                <div className="flex">
                  <Button
                    onClick={onDeleteFile}
                    className="hover:bg-[#fe7743] hover:shadow-md"
                  >
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
    <div className="h-screen overflow-y-scroll p-5">
      <div className="flex justify-between py-2 border-b-2">
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
