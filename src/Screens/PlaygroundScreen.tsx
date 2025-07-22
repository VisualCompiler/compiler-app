import { useParams } from 'react-router-dom'
import { EditorContainer } from '../components/EditorContainer'
import Split from 'react-split'
import { Panel } from '../components/Panel'

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()

  if (!folderId || !fileId) {
    return <div>Missing folder or file ID</div>
  }

  return (
    <div>
      <div className="header p-4 text-white text-lg font-semibold bg-gray-800">
        Visual Compiler
      </div>
      <div className="flex-1">
        <Split
          className="split flex h-[calc(100vh-86px)] m-3 gap-0.5"
          sizes={[50, 50]}
          minSize={150}
          gutterSize={6}
          direction="horizontal"
        >
          <EditorContainer fileId={fileId} folderId={folderId} />
          <Panel>
            <div></div>
          </Panel>
        </Split>
      </div>
    </div>
  )
}