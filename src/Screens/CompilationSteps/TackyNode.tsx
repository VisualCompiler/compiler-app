import React from 'react'

interface TackyNodeProps {
  node: any
  nodeKey?: string //  "function", "body", ..
}

const getTailwindColorForType = (type: string): string => {
  switch (type) {
    // Control Flow Instructions
    case 'TackyRet':
      return 'text-purple-500'

    // Operational Instructions
    case 'TackyUnary':
    case 'TackyBinary':
      return 'text-sky-500'

    // Values and Variables
    case 'TackyConstant':
      return 'text-pink-300'
    case 'TackyVar':
      return 'text-blue-400'

    // Structural Elements
    case 'TackyProgram':
    case 'TackyFunction':
      return 'text-gray-400'

    // Default for unknown types
    default:
      return 'text-gray-200'
  }
}

export const TackyNode: React.FC<TackyNodeProps> = ({ node, nodeKey }) => {
  // --- Case 1: Handle leaf nodes (strings, numbers, null) ---
  if (node === null || typeof node !== 'object') {
    return (
      <div className="font-mono text-sm">
        {nodeKey && <span className="text-orange-400">{nodeKey}</span>}
        {nodeKey && <span className="text-gray-600">: </span>}
        <span className="text-emerald-500">{String(node)}</span>
      </div>
    )
  }

  // --- Case 2: Handle arrays (like the body of a function) ---
  if (Array.isArray(node)) {
    return (
      <div className="font-mono text-sm">
        {nodeKey && <span className="text-orange-400">{nodeKey}</span>}
        {nodeKey && <span className="text-gray-600">: </span>}
        <span className="text-gray-600">[</span>
        <div className="pl-4 border-l border-gray-700">
          {node.map((item, index) => (
            <TackyNode key={index} node={item} />
          ))}
        </div>
        <span className="text-gray-600">]</span>
      </div>
    )
  }

  // --- Case 3: Handle all other objects ---
  // This is the core of the fix. We differentiate between our special Tacky
  // nodes and generic container objects.
  const isSpecialTackyNode = node.type && typeof node.type === 'string'

  return (
    <div className="font-mono text-sm">
      {nodeKey && <span className="text-orange-400">{nodeKey}</span>}
      {nodeKey && <span className="text-gray-600">: </span>}

      {/* Don't render braces for the top-level root node */}
      {nodeKey && <span className="text-gray-600">{'{'}</span>}

      <div className={nodeKey ? 'pl-4 border-l border-gray-700' : ''}>
        {isSpecialTackyNode ? (
          // --- Rendering path for a special Tacky node ---
          <>
            <div>
              <span className="text-orange-400">type: </span>
              <span className={getTailwindColorForType(node.type)}>
                {node.type}
              </span>
            </div>
            {node.label && (
              <div>
                <span className="text-orange-400">label: </span>
                <span className="text-emerald-500">{String(node.label)}</span>
              </div>
            )}
            {node.children && (
              <TackyNode node={node.children} nodeKey="children" />
            )}
          </>
        ) : (
          // --- Rendering path for a generic container object ---
          // Iterate over all key-value pairs and recurse.
          <>
            {Object.entries(node).map(([key, value]) => (
              <TackyNode key={key} nodeKey={key} node={value} />
            ))}
          </>
        )}
      </div>

      {nodeKey && <span className="text-gray-600">{'}'}</span>}
    </div>
  )
}
