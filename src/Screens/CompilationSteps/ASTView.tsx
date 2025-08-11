import { ASTNodeComponent } from '@/components/ASTNodeComponent'
import { useMemo } from 'react'
import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState
} from 'react-flow-renderer'

const nodeTypes = {
  astNode: ASTNodeComponent
}


const generateGraph = (root: any): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = []
  const edges: Edge[] = []
  let nodeIdCounter = 0

  const walk = (node: any, x = 0, y = 0, parentId?: string) => {
    if (!node || typeof node !== 'object') {
      return;
    }

    const nodeId = node.id || `node-${nodeIdCounter++}`
    const nodeType = node.type || node.label || 'Unknown'
    const nodeLabel = node.label || node.type || 'Unknown'

    nodes.push({
      id: nodeId,
      data: { label: `${nodeType}(${nodeLabel})`, type: nodeType },
      position: { x, y },
      type: 'astNode'
    })

    if (parentId) {
      edges.push({
        id: `${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId
      })
    }

    const spacing = 150

    if (node.children && typeof node.children === 'object') {
      const childEntries = Object.entries(node.children)
      
      childEntries.forEach(([, value]: [string, any], index: number) => {
        let childNode: any = null
        
        // Handle JSON string children
        if (typeof value === 'string') {
          try {
            childNode = JSON.parse(value)
          } catch (error) {
            console.error('Failed to parse child JSON:', error)
            return
          }
        } else if (typeof value === 'object') {
          childNode = value
        }
        
        if (childNode) {
          const childX = x + (index - (childEntries.length - 1) / 2) * spacing
          const childY = y + spacing
          walk(childNode, childX, childY, nodeId)
        }
      })
    }
  }

  try {
    walk(root)
  } catch (error) {
    console.error('Error generating graph:', error)
  }
  
  return { nodes, edges }
}

interface ASTViewerProps {
  ast: any;
}

export const ASTViewer: React.FC<ASTViewerProps> = ({ ast }) => {
  const graphAST = useMemo(() => {return ast}, [ast]);

  const { nodes, edges } = useMemo(() => {
    if (!graphAST) {
      return { nodes: [], edges: [] };
    }
    return generateGraph(graphAST);
  }, [graphAST]);

  const [flowNodes, , onNodesChange] = useNodesState(nodes)
  const [flowEdges, , onEdgesChange] = useEdgesState(edges)

  if (!ast) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-muted-foreground'>No AST data available</p>
      </div>
    );
  }

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
        <Controls />
      </ReactFlow>
    </div>
  )
}
