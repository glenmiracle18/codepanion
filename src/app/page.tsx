"use client"
import { CodeEditor } from "@/components/ui/code-editor";
import { ConceptGraph } from "@/components/visualization/concept-graph";
import Image from "next/image";

export default function Home() {
  const nodes = [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 100 },
    },
  ];

  const edges = [{ id: '1-2', source: '1', target: '2' }];


  return (
    <div className="flex items-center justify-center h-screen">
      {/* <ConceptGraph nodes={nodes} edges={edges} /> */}
      <CodeEditor />
    </div>
  );
}
