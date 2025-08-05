// src/components/EditorContainer.tsx

import React, { useRef, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import { autocompletion } from '@codemirror/autocomplete'
import { foldGutter } from '@codemirror/language'
import {
  EditorView,
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
  lineNumbers,
} from '@codemirror/view'
import {
  defaultHighlightStyle,
  syntaxHighlighting,
  indentOnInput,
  bracketMatching,
} from '@codemirror/language'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { cpp } from '@codemirror/lang-cpp'
import { oneDark } from '@codemirror/theme-one-dark'

// Define the new props interface
interface EditorContainerProps {
  value: string
  onChange: (value: string) => void
}

export const EditorContainer: React.FC<EditorContainerProps> = ({
  value,
  onChange,
}) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  // This effect sets up the editor once
  useEffect(() => {
    if (!editorRef.current) return

    const state = EditorState.create({
      doc: value,
      extensions: [
        lineNumbers(),
        highlightSpecialChars(),
        history(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        autocompletion(),
        foldGutter(),
        highlightActiveLine(),
        syntaxHighlighting(defaultHighlightStyle),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        oneDark,
        cpp(),
        // Listen for updates and call the onChange prop
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString())
          }
        }),
        EditorView.theme({
          '&': { height: '100%' },
          '.cm-scroller': {
            fontFamily: 'Fira Code, monospace',
            fontSize: '14px',
          },
        }),
      ],
    })

    const view = new EditorView({ state, parent: editorRef.current })
    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
  }, [onChange]) // Only re-run if the onChange callback changes

  // This effect synchronizes the editor when the parents value prop changes
  useEffect(() => {
    const view = viewRef.current
    if (view) {
      const currentCodeInEditor = view.state.doc.toString()
      if (value !== currentCodeInEditor) {
        view.dispatch({
          changes: {
            from: 0,
            to: currentCodeInEditor.length,
            insert: value,
          },
        })
      }
    }
  }, [value])

  return (
    <div
      ref={editorRef}
      className="bg-secondary/50 h-full w-full overflow-auto"
    ></div>
  )
}
