import { Handle, Position } from 'react-flow-renderer'

export const ASTNodeComponent = ({ data }: any) => {
  const { label, type } = data

  const colorMap: Record<string, string> = {
    Function: 'bg-cyan-600',
    Return: 'bg-amber-600',
    Constant: 'bg-emerald-600',
    SimpleProgram: 'bg-blue-600',
    SimpleFunction: 'bg-cyan-600',
    Identifier: 'bg-green-600',
    ReturnStatement: 'bg-amber-600',
    IntExpression: 'bg-emerald-600',
    Expression: 'bg-purple-600',
    Statement: 'bg-orange-600',
    Program: 'bg-blue-600'
  }

  const background = colorMap[type] || 'bg-gray-300'

  return (
    <div className={`text-xs px-2 p-2 rounded-xs ${background} text-center`}>
      {label}
      <Handle type='target' position={Position.Top} />
      <Handle type='source' position={Position.Bottom} />
    </div>
  )
}
