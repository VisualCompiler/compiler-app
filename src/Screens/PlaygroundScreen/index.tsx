import './index.scss'
import { useParams } from 'react-router-dom'
import { EditorContainer } from './EditorContainer'

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()

  if (!folderId || !fileId) {
    return <div>Missing folder or file ID</div>
  }

  return (
    <div className="playground-container">
      <div className="header"></div>

      <div className="content-container">
        <EditorContainer fileId={fileId} folderId={folderId} />
      </div>
    </div>
  )
}
