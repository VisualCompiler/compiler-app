import { ASTNodeComponent } from '@/components/ASTNodeComponent'
import { useMemo } from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState
} from 'react-flow-renderer'

const nodeTypes = {
  astNode: ASTNodeComponent
}

type ASTNode = {
  id: string
  label: string
  type: string
  children?: ASTNode[]
}

const generateGraph = (root: ASTNode): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = []
  const edges: Edge[] = []

  const walk = (node: ASTNode, x = 0, y = 0, parentId?: string) => {
    nodes.push({
      id: node.id,
      data: { label: `${node.type}(${node.label})`, type: node.type },
      position: { x, y },
      type: 'astNode'
    })

    if (parentId) {
      edges.push({
        id: `${parentId}-${node.id}`,
        source: parentId,
        target: node.id
      })
    }

    const spacing = 150
    node.children?.forEach((child, index) => {
      const childX = x + (index - (node.children!.length - 1) / 2) * spacing
      const childY = y + spacing
      walk(child, childX, childY, node.id)
    })
  }

  walk(root)
  return { nodes, edges }
}

const sampleAST: ASTNode = {
  // Example for demostration purposes
  id: '1',
  type: 'Function',
  label: "'main', body",
  children: [
    {
      id: '2',
      type: 'Return',
      label: 'exp',
      children: [
        {
          id: '3',
          type: 'Constant',
          label: '42'
        }
      ]
    }
  ]
}

export const ASTViewer = () => {
  const { nodes, edges } = useMemo(() => generateGraph(sampleAST), [])

  const [flowNodes, , onNodesChange] = useNodesState(nodes)
  const [flowEdges, , onEdgesChange] = useEdgesState(edges)

  return (
    <div className='w-full h-full'>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesConnectable={false}
        fitView
      >
        <Background />
        <MiniMap nodeColor={'grey'} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
