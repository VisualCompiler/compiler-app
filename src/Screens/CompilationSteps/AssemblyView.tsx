import React, { useRef, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import { autocompletion } from '@codemirror/autocomplete'
import {
  foldGutter,
  syntaxHighlighting,
  indentOnInput,
  bracketMatching,
  defaultHighlightStyle,
} from '@codemirror/language'
import {
  EditorView,
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
  lineNumbers,
} from '@codemirror/view'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { StreamLanguage } from '@codemirror/language'
import { z80 } from '@codemirror/legacy-modes/mode/z80'
import { oneDark } from '@codemirror/theme-one-dark'
import { useTheme } from 'next-themes'

interface AssemblyViewProps {
  asmCode: string
}

export const AssemblyView: React.FC<AssemblyViewProps> = ({ asmCode }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!editorRef.current) return

    const themeExtension = resolvedTheme === 'dark' ? oneDark : []

    const state = EditorState.create({
      doc: asmCode,
      extensions: [
        lineNumbers(),
        highlightSpecialChars(),
        history(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        foldGutter(),
        highlightActiveLine(),
        syntaxHighlighting(defaultHighlightStyle),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        themeExtension,
        StreamLanguage.define(z80),
        EditorState.readOnly.of(true), // read-only
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
  }, [asmCode, resolvedTheme])

  return (
    <div
      ref={editorRef}
      className="bg-secondary/50 h-full w-full overflow-auto"
    ></div>
  )
}
