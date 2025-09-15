import React, { useRef, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import {
  foldGutter,
  syntaxHighlighting,
  indentOnInput,
  bracketMatching,
  HighlightStyle,
} from '@codemirror/language'
import { tags as t } from '@lezer/highlight'
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
import { useTheme } from 'next-themes'

// Custom highlight style that uses CSS classes
const customHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, class: 'cm-keyword' },
  { tag: t.name, class: 'cm-identifier' },
  { tag: t.variableName, class: 'cm-variable' },
  { tag: t.function(t.variableName), class: 'cm-function' },
  { tag: t.function(t.propertyName), class: 'cm-function' },
  { tag: t.propertyName, class: 'cm-property' },
  { tag: t.typeName, class: 'cm-type' },
  { tag: t.className, class: 'cm-type' },
  { tag: t.number, class: 'cm-number' },
  { tag: t.string, class: 'cm-string' },
  { tag: t.regexp, class: 'cm-string' },
  { tag: t.escape, class: 'cm-string' },
  { tag: t.special(t.string), class: 'cm-string' },
  { tag: t.comment, class: 'cm-comment' },
  { tag: t.lineComment, class: 'cm-comment' },
  { tag: t.blockComment, class: 'cm-comment' },
  { tag: t.docComment, class: 'cm-comment' },
  { tag: t.operator, class: 'cm-operator' },
  { tag: t.operatorKeyword, class: 'cm-operator' },
  { tag: t.punctuation, class: 'cm-punctuation' },
  { tag: t.separator, class: 'cm-punctuation' },
  { tag: t.bracket, class: 'cm-punctuation' },
  { tag: t.squareBracket, class: 'cm-punctuation' },
  { tag: t.paren, class: 'cm-punctuation' },
  { tag: t.brace, class: 'cm-punctuation' },
  { tag: t.definition(t.variableName), class: 'cm-definition' },
  { tag: t.definition(t.propertyName), class: 'cm-definition' },
  { tag: t.constant(t.variableName), class: 'cm-constant' },
  { tag: t.standard(t.variableName), class: 'cm-builtin' },
  { tag: t.standard(t.tagName), class: 'cm-builtin' },
  { tag: t.local(t.variableName), class: 'cm-variable' },
  { tag: t.meta, class: 'cm-keyword' },
  { tag: t.link, class: 'cm-string' },
  { tag: t.heading, class: 'cm-keyword' },
  { tag: t.emphasis, class: 'cm-identifier' },
  { tag: t.strong, class: 'cm-keyword' },
  { tag: t.strikethrough, class: 'cm-comment' },
])

interface AssemblyViewProps {
  asmCode: string
}

export const AssemblyView: React.FC<AssemblyViewProps> = ({ asmCode }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!editorRef.current) return

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
        syntaxHighlighting(customHighlightStyle),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        StreamLanguage.define(z80),
        EditorState.readOnly.of(true), // read-only
        EditorView.theme({
          '&': { 
            height: '100%', 
            backgroundColor: 'transparent' 
          },
          '.cm-scroller': {
            fontFamily: 'Fira Code, monospace',
            fontSize: '14px',
          },
          '.cm-gutters': {
            backgroundColor: 'var(--color-secondary)',
            borderRight: '1px solid var(--color-border)',
          },
          '.cm-lineNumbers': {
            backgroundColor: 'var(--color-secondary)',
          },
          '.cm-content': {
            backgroundColor: 'transparent',
          },
          '.cm-line': {
            backgroundColor: 'transparent',
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
