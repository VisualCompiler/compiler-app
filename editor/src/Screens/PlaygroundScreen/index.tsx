import './index.scss'
import { useParams } from 'react-router-dom'
import { EditorContainer } from './EditorContainer'

export const PlaygroundScreen = () => {
  const params = useParams()
  const { folderId, fileId } = params
  return (
    <div className="playground-container">
      <div className="header"></div>

      <div className="content-container">
        <EditorContainer fileId={fileId} folderId={folderId} />
      </div>
    </div>
  )
}
