import { useContext } from 'react'
import { PlaygroundContext } from '../PlaygroundProvider'
import { ModalContext } from '../ModalProvider'

export const CreateCardModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext)
  const { createPlaygroundCard } = useContext(PlaygroundContext)

  const onSubmitModal = (e) => {
    e.preventDefault()
    const title = e.target.fileName.value
    createPlaygroundCard(modalPayload, title)
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
