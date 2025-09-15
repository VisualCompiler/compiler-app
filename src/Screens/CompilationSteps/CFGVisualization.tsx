import React, { useMemo, useEffect } from 'react'
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  type Node,
  type Edge,
} from 'react-flow-renderer'

type CFGNodeData = {
  id: string
  label: string
  type: 'entry' | 'exit' | 'block' | string
}

type CFGEdgeData = {
  from: string
  to: string
}

type CFGData = {
  nodes: CFGNodeData[]
  edges: CFGEdgeData[]
}

// custom node component
const CFGNodeComponent: React.FC<{ data: CFGNodeData }> = ({ data }) => {
  const base = `flex flex-col items-center justify-center px-3 py-2 text-xs font-semibold text-white 
                rounded-md shadow-md`

  const variants: Record<string, string> = {
    entry: `bg-emerald-600`,
    exit: `bg-indigo-600`,
    block: `bg-slate-500`,
  }

  return (
    <div className={`${base} ${variants[data.type]} border border-slate-200`}>
      <Handle type="source" position={Position.Bottom} id="source" />
      <Handle type="target" position={Position.Top} id="target" />
      <div className="uppercase text-[10px] opacity-80">{data.type}</div>
      {data.type === 'block' && <pre className="text-sm font-medium">{data.label}</pre>}
    </div> 
  )
}

import dagre from 'dagre'

// Define nodeTypes outside component to prevent recreation on every render
const nodeTypes = { cfgNode: CFGNodeComponent }

// Define dagre graph outside component
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
dagreGraph.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 75 })

const applyLayout = (cfg: CFGData): { nodes: Node[]; edges: Edge[] } => {
  const g = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
  g.setGraph({ rankdir: 'TB', nodesep: 80, ranksep: 100 }) // tweak spacing

  cfg.nodes.forEach(node => {
    g.setNode(node.id, { width: 150, height: 80 })
  })
  cfg.edges.forEach(edge => {
    g.setEdge(edge.from, edge.to)
  })

  dagre.layout(g)

  const nodes: Node[] = cfg.nodes.map(node => {
    const { x, y } = g.node(node.id)
    return {
      id: node.id,
      data: node,
      type: 'cfgNode',
      position: { x, y },
    }
  })

  const edges: Edge[] = cfg.edges.map((edge, i) => ({
    id: `e${i}`,
    source: edge.from,
    target: edge.to,
    sourceHandle: 'source',
    targetHandle: 'target',
    animated: false,
  }))

  return { nodes, edges }
}


// main visualization
export const CFGVisualization: React.FC<{ cfgData?: CFGData }> = ({ cfgData }) => {
  const { nodes, edges } = useMemo(() => {
    if (!cfgData) return { nodes: [], edges: [] }
    let { nodes, edges } = applyLayout(cfgData)
    return { nodes, edges }
  }, [cfgData])
  

  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState(nodes)
  const [flowEdges, setFlowEdges, onEdgesChange] = useEdgesState(edges)

  useEffect(() => {
    setFlowNodes(nodes)
    setFlowEdges(edges)
  }, [nodes, edges, setFlowNodes, setFlowEdges])

  if (!cfgData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">No CFG Available</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Compile your code to see the control flow graph</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesConnectable={false}
        fitView
      >
        <Background gap={20} size={1.2} color="rgba(148, 163, 184, 0.3)" />
        <Controls className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow rounded" />
      </ReactFlow>
      <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded bg-amber-600/60 dark:bg-amber-900/50 text-slate-800 dark:text-slate-200 shadow">
        {flowNodes.length} nodes • {flowEdges.length} edges
      </div>
    </div>
  )
}
