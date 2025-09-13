import {
  ASTNodeComponent,
  getNodeHexColor,
} from "@/Screens/CompilationSteps/ASTNodeComponent";
import { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";

const nodeTypes = {
  astNode: ASTNodeComponent,
};

const generateGraph = (root: any): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let nodeIdCounter = 0;

  const walk = (
    node: any,
    x = 0,
    y = 0,
    parentId?: string,
    edgeLabel?: string
  ) => {
    if (!node || typeof node !== "object") {
      return;
    }

    const nodeId = node.id || `node-${nodeIdCounter++}`;
    const nodeType = node.type || node.label || "Unknown";
    const nodeLabel = node.label || node.type || "Unknown";

    // Get the color for the node type (CSS variable or hex)
    const nodeHexColor = getNodeHexColor(nodeType);

    nodes.push({
      id: nodeId,
      data: { label: `${nodeLabel}`, type: nodeType, color: nodeHexColor },
      position: { x, y },
      type: "astNode",
    });

    if (parentId) {
      // Find the parent node to get its color
      const parentNode = nodes.find((n) => n.id === parentId);
      const parentColor = parentNode?.data?.color || "#6b7280"; // Default neutral color

      // Convert CSS variable to hex for edge styling
      const edgeHexColor = parentColor.startsWith("var(--")
        ? getNodeHexColor(parentNode?.data?.type || "default")
        : parentColor;

      const edgeStyle = {
        stroke: edgeHexColor,
        strokeWidth: 2,
      };

      edges.push({
        id: `${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId,
        label: edgeLabel || "",
        ...(edgeLabel && {
          labelStyle: {
            fontSize: "10px",
            fontWeight: "bold",
            fill: parentColor,
          },
          labelBgStyle: {
            fill: "Background",
            fillOpacity: 0.9,
            stroke: parentColor,
            strokeWidth: 1,
          },
        }),
        style: edgeStyle,
      });
    }

    const verticalSpacing = 100;
    const horizontalSpacing = 300;

    if (node.children && typeof node.children === "object") {
      const childEntries = Object.entries(node.children);

      childEntries.forEach(([key, value]: [string, any], index: number) => {
        let childNode: any = null;

        // Handle different types of child values
        if (typeof value === "string") {
          // Try to parse as JSON first, but fall back to treating as plain string
          try {
            childNode = JSON.parse(value);
          } catch (error) {
            // If it's not valid JSON, it might be a plain string value
            // Skip this as it's not a node structure
            return;
          }
        } else if (Array.isArray(value)) {
          // Handle JSON arrays (like Block nodes)
          value.forEach((item, arrayIndex) => {
            let arrayChildNode = item;
            if (typeof item === "string") {
              try {
                arrayChildNode = JSON.parse(item);
              } catch (error) {
                return;
              }
            }
            if (arrayChildNode) {
              // For block items, position them horizontally based on their array index
              const childX =
                x + (arrayIndex - (value.length - 1) / 2) * horizontalSpacing;
              const childY = y + verticalSpacing + arrayIndex * 50;
              // For block items, annotate with position number
              const blockEdgeLabel = key === "block" ? `${arrayIndex}` : key;
              walk(arrayChildNode, childX, childY, nodeId, blockEdgeLabel);
            }
          });
          return; // Skip the normal childNode handling for arrays
        } else if (typeof value === "object") {
          childNode = value;
        }

        if (childNode) {
          const childX =
            x + (index - (childEntries.length - 1) / 2) * horizontalSpacing;
          const childY = y + verticalSpacing;
          // When edgeLabels is true, use the key as the edge label
          const edgeLabel = node.edgeLabels ? key : "";
          walk(childNode, childX, childY, nodeId, edgeLabel);
        }
      });
    }
  };

  try {
    walk(root);
  } catch (error) {
    console.error("Error generating graph:", error);
  }

  return { nodes, edges };
};

interface ASTViewerProps {
  ast: any;
}

export const ASTViewer: React.FC<ASTViewerProps> = ({ ast }) => {
  const graphAST = useMemo(() => {
    return ast;
  }, [ast]);

  const { nodes, edges } = useMemo(() => {
    if (!graphAST) {
      return { nodes: [], edges: [] };
    }
    return generateGraph(graphAST);
  }, [graphAST]);

  const [flowNodes, , onNodesChange] = useNodesState(nodes);
  const [flowEdges, , onEdgesChange] = useEdgesState(edges);

  if (!ast) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground">No AST data available</p>
      </div>
    );
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
  );
};
