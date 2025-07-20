import './index.scss'
import { useParams } from 'react-router-dom'
import { EditorContainer } from './EditorContainer'
import Split from 'react-split'
import { Panel } from './Panel'

const CompilationStepPanel = () => {
  return (
    <Panel title="Compilation Step Panel" className="compilation-step-panel">
      <div></div>
    </Panel>
  )
}

export const PlaygroundScreen = () => {
  const { folderId, fileId } = useParams()

  if (!folderId || !fileId) {
    return <div>Missing folder or file ID</div>
  }

  return (
    <div className="playground-container">
      <div className="header">Header</div>
      <Split
        className="split"
        sizes={[50,50]}
        minSize={150}
        gutterSize={6}
        direction="horizontal"
        style={{ display: 'flex', height: '100%' }}
      >
        <EditorContainer fileId={fileId} folderId={folderId} />
        <CompilationStepPanel />
      </Split>
    </div>
  )
}