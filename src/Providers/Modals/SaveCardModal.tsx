import { useContext, useState } from 'react'
import { ModalContext } from '../ModalProvider'
import { PlaygroundContext } from '../PlaygroundProvider'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export const SaveCardModal = () => {
  const modalFeatures = useContext(ModalContext)
  const playgroundFeatures = useContext(PlaygroundContext)
  const code = modalFeatures?.modalPayload

  const [open, setOpen] = useState(true)
  const [selectedFolderId, setSelectedFolderId] = useState<string>('root')

  const closeModal = () => {
    setOpen(false)
    modalFeatures?.closeModal()
  }

  interface PlaygroundFormElements extends HTMLFormControlsCollection {
    fileName: HTMLInputElement
  }

  interface PlaygroundForm extends HTMLFormElement {
    readonly elements: PlaygroundFormElements
  }

  const onSubmitModal = (e: React.FormEvent<PlaygroundForm>) => {
    e.preventDefault()
    const fileName = e.currentTarget.fileName.value
    const folderName = e.currentTarget.folderName.value
    if (!folderName) {
      playgroundFeatures?.createPlaygroundCard(selectedFolderId, fileName, code)
    } else {
      playgroundFeatures?.saveNewPlayground({
        folderName,
        fileName,
        code,
      })
    }
    closeModal()
  }

  const folders = playgroundFeatures?.folders || []

  return (
    <Dialog open={open} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Save Playground</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmitModal} className="space-y-4 mt-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="fileName">Enter File name:</label>
            <input
              name="fileName"
              id="fileName"
              required
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="folderSelect">Choose Folder:</label>
            <select
              id="folderSelect"
              value={selectedFolderId}
              onChange={(e) => setSelectedFolderId(e.target.value)}
              className="border rounded px-2 py-1"
            >
              {folders.map((folder) => (
                <option key={folder.id} value={folder.id}>
                  {folder.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <span>OR Create New Folder:</span>
            <label htmlFor="folderName">Enter Folder name:</label>
            <input
              name="folderName"
              id="folderName"
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
