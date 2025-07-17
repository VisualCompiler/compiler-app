import './EditorContainer.scss'
import React, { useRef, useEffect, useState, useContext } from 'react'

import { EditorState } from '@codemirror/state'
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
import { PlaygroundContext } from '../../Providers/PlaygroundProvider'

export const EditorContainer = ({ fileId, folderId }) => {
  const { getCode } = useContext(PlaygroundContext)
  const [code, setCode] = useState(() => {
    return getCode(fileId, folderId)
  })
  const editor = useRef()

  useEffect(() => {
    const state = EditorState.create({
      doc: code,
      extensions: [
        lineNumbers(),
        highlightSpecialChars(),
        history(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        highlightActiveLine(),
        syntaxHighlighting(defaultHighlightStyle),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        oneDark,
        cpp({ dialect: 'c99' }),
      ],
    })

    const view = new EditorView({
      state,
      parent: editor.current,
    })

    return () => view.destroy()
  }, [code])

  return (
    <div className="root-editor-container">
      <div className="editor-body" ref={editor}></div>
    </div>
  )
}
