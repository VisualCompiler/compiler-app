import { useContext } from 'react'
import './index.scss'
import { PlaygroundContext } from '../../../Providers/PlaygroundProvider'

const Folder = ({ folderTitle, cards, id }) => {
  const { deleteFolder } = useContext(PlaygroundContext)
  const onDeleteFolder = () => {
    deleteFolder(id)
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

          <button>
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
          return (
            <div className="card" key={index}>
              <img src="code_blocks.png" />
              <div className="card-title">
                <span>{file?.title}</span>
              </div>
              <div className="card-element">
                <button>
                  <span class="material-symbols-outlined">edit</span>
                </button>
                <button>
                  <span class="material-symbols-outlined">delete</span>
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
            id={folder?.id}
            key={index}
          />
        )
      })}
    </div>
  )
}
