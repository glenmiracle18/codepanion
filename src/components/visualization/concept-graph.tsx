import  { 
    ReactFlow,
    Node, 
    Edge,
    Background,
    Controls 
  } from '@xyflow/react'
  import '@xyflow/react/dist/style.css';  
  
  export function ConceptGraph({ 
    nodes, 
    edges 
  }: { 
    nodes: Node[]
    edges: Edge[] 
  }) {
    return (
      <div className="h-[400px] w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
  }