import type { SourceLocation } from '@/Hooks/useCompilationSteps'
import {
  ASTNodeComponent,
  getNodeHexColor,
} from '@/Screens/CompilationSteps/ASTNodeComponent'
import { useEffect, useMemo } from 'react'
import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState,
  Position,
} from 'react-flow-renderer'

import dagre from 'dagre'

const nodeWidth = 70
const nodeHeight = 25

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))

  dagreGraph.setGraph({
    rankdir: 'TB', // top-to-bottom
    nodesep: 50,
    ranksep: 100,
  })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const { x, y } = dagreGraph.node(node.id)
    return {
      ...node,
      position: { x, y },
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
    }
  })

  return { nodes: layoutedNodes, edges }
}

const generateGraph = (
  root: any,
  setActiveLocation: (location: SourceLocation | null) => void
): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = []
  const edges: Edge[] = []
  let nodeIdCounter = 0

  const walk = (node: any, parentId?: string, edgeLabel?: string) => {
    if (!node || typeof node !== 'object') return

    const nodeId = node.id || `node-${nodeIdCounter++}`

    nodes.push({
      id: nodeId,
      data: {
        label: node.label || node.type || 'Unknown',
        type: node.type || node.label || 'Unknown',
        color: getNodeHexColor(node.type),
        id: node.id,
        location: node.location,
        setActiveLocation,
      },
      position: { x: 0, y: 0 }, // dagre will override
      type: 'astNode',
    })

    if (parentId) {
      const parentNode = nodes.find((n) => n.id === parentId)
      const parentColor = parentNode?.data?.color || '#6b7280'
      const edgeHexColor = parentColor.startsWith('var(--')
        ? getNodeHexColor(parentNode?.data?.type || 'default')
        : parentColor

      edges.push({
        id: `${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId,
        ...(edgeLabel
          ? {
              label: edgeLabel,
              labelStyle: {
                fontSize: '10px',
                fontWeight: 'bold',
                fill: parentColor,
              },
              labelBgStyle: {
                fill: 'Background',
                fillOpacity: 0.9,
                stroke: parentColor,
                strokeWidth: 1,
              },
            }
          : {}),
        style: {
          stroke: edgeHexColor,
          strokeWidth: 2,
        },
      })
    }

    if (node.children && typeof node.children === 'object') {
      Object.entries(node.children).forEach(([key, value]: [string, any]) => {
        if (Array.isArray(value)) {
          value.forEach((item, idx) => {
            let child = item
            if (typeof child === 'string') {
              try {
                child = JSON.parse(child)
              } catch {
                return
              }
            }
            walk(child, nodeId, key === 'block' ? `${idx}` : key)
          })
        } else if (typeof value === 'string') {
          try {
            const child = JSON.parse(value)
            walk(child, nodeId, key)
          } catch {
            return
          }
        } else if (typeof value === 'object') {
          walk(value, nodeId, key)
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
  ast: any
  activeLocation: SourceLocation | null
  setActiveLocation: (location: SourceLocation | null) => void
}

export const ASTViewer: React.FC<ASTViewerProps> = ({
  ast,
  activeLocation,
  setActiveLocation,
}) => {
  const graphAST = useMemo(() => ast, [ast])

  const { nodes, edges } = useMemo(() => {
    if (!graphAST) return { nodes: [], edges: [] }
    const generated = generateGraph(graphAST, setActiveLocation)
    return getLayoutedElements(generated.nodes, generated.edges)
  }, [graphAST, setActiveLocation])

  const nodeTypes = useMemo(
    () => ({
      astNode: (props: any) => (
        <ASTNodeComponent
          {...props.data}
          isActive={
            activeLocation &&
            props.data.location.startLine === activeLocation.startLine &&
            props.data.location.endLine === activeLocation.endLine
          }
        />
      ),
    }),
    [activeLocation]
  )

  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState(nodes)
  const [flowEdges, setFlowEdges, onEdgesChange] = useEdgesState(edges)

  useEffect(() => {
    setFlowNodes(nodes)
  }, [nodes, setFlowNodes])

  useEffect(() => {
    setFlowEdges(edges)
  }, [edges, setFlowEdges])

  useEffect(() => {
    setFlowNodes((nds) =>
      nds.map((node) => {
        const isActive =
          activeLocation &&
          node.data.location?.startLine === activeLocation.startLine &&
          node.data.location?.endLine === activeLocation.endLine &&
          node.data.location?.startCol === activeLocation.startCol &&
          node.data.location?.endCol === activeLocation.endCol

        return { ...node, data: { ...node.data, isActive } }
      })
    )
  }, [activeLocation, setFlowNodes])

  if (!ast) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground">No AST data available</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
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
