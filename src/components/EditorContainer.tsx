import './EditorContainer.scss'
import React, { useRef, useEffect, useState, useContext } from 'react'

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
import { PlaygroundContext } from '../Providers/PlaygroundProvider'

interface EditorContainerProps {
  fileId: string
  folderId: string
}

export const EditorContainer: React.FC<EditorContainerProps> = ({
  fileId,
  folderId,
}) => {
  const { getCode, saveCode } = useContext(PlaygroundContext) as {
    getCode: (fileId: string, folderId: string) => string
    saveCode: (folderId: string, fileId: string, newCode: string) => void
  }
  const [code] = useState<string>(() => {
    return getCode(fileId, folderId)
  })
  const editor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!editor.current) return

    const state = EditorState.create({
      doc: code,
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
        EditorView.theme({
          '&': { height: '100%' }, // make the editor take full height of its parent
          '.cm-content': { padding: '16px' }, // padding inside the editor
          '.cm-scroller': {
            fontFamily: 'Fira Code, monospace',
            fontSize: '14px',
          },
        }),

        syntaxHighlighting(defaultHighlightStyle),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        oneDark,
        cpp(),
      ],
    })

    const view = new EditorView({
      state,
      parent: editor.current,
      dispatch: (tr) => {
        view.update([tr])

        if (tr.docChanged) {
          const updatedCode = view.state.doc.toString()
          saveCode(folderId, fileId, updatedCode)
        }
      },
    })

    return () => view.destroy()
  }, [code])

  return (
    <div
      ref={editor}
      className="bg-secondary/50  h-full w-full overflow-auto"
    ></div>
  )
}
