"use client"
import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'

export function CodeEditor({ 
  initialCode = '', 
  onChange 
}: { 
  initialCode?: string
  onChange?: (value: string) => void 
}) {
  const [code, setCode] = useState(initialCode)

  const handleEditorChange = (value: string = '') => {
    setCode(value)
    onChange?.(value)
  }

  return (
    <div className="h-[500px] w-full border rounded-lg overflow-hidden">
      <MonacoEditor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  )
}

