import { useContext } from 'react'
import './createPlaygroundModal.scss'
import { ModalContext } from '../ModalProvider'
import { PlaygroundContext } from '../PlaygroundProvider'

export const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext)
  const playgroundFeatures = useContext(PlaygroundContext)

  const closeModal = () => {
    modalFeatures.closeModal()
  }

  const onSubmitModal = (e) => {
    e.preventDefault()
    const folderName = e.target.folderName.value
    const fileName = e.target.fileName.value
    playgroundFeatures.createNewPlayground({
      folderName,
      fileName,
    })
    closeModal()
  }

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} class="material-symbols-outlined">
          close
        </span>
        <h1>Create new Playground</h1>
        <div className="item">
          <p>Enter Folder name:</p>
          <input name="folderName" required />
        </div>
        <div className="item">
          <p>Enter File name:</p>
          <input name="fileName" required />
        </div>
        <div className="item">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}
