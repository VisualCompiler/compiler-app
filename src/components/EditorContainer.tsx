import React, { useRef, useEffect } from 'react'
import { EditorState, StateField, StateEffect } from '@codemirror/state'
import { autocompletion } from '@codemirror/autocomplete'
import { solarizedDark } from '@uiw/codemirror-theme-solarized'
import { nord } from '@uiw/codemirror-theme-nord'
import { foldGutter } from '@codemirror/language'
import {
  EditorView,
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
  lineNumbers,
  Decoration,
  type DecorationSet,
} from '@codemirror/view'

import {
  syntaxHighlighting,
  indentOnInput,
  bracketMatching,
  HighlightStyle,
} from '@codemirror/language'
import { tags as t } from '@lezer/highlight'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { cpp } from '@codemirror/lang-cpp'
import { useTheme } from 'next-themes'
import type { CompilationError } from 'scripts/kotlin-js/CompilerLogic'
import type { SourceLocation } from '@/Hooks/useCompilationSteps'

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

const setErrorEffect = StateEffect.define<CompilationError[]>()

// Define a StateEffect to update the highlight location.
const setHighlightEffect = StateEffect.define<SourceLocation | null>()

// Define the decoration for the highlight.
const highlightDecoration = Decoration.mark({ class: 'cm-highlighted-range' })
const highlightField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none
  },
  update(decorations, transaction) {
    for (const effect of transaction.effects) {
      if (effect.is(setHighlightEffect)) {
        const location = effect.value
        if (!location) return Decoration.none

        try {
          const startLine = transaction.state.doc.line(location.startLine)
          const endLine = transaction.state.doc.line(location.endLine)

          const from = startLine.from + (location.startCol - 1)
          const to = endLine.from + location.endCol

          return Decoration.set([highlightDecoration.range(from, to)])
        } catch (e) {
          console.warn('Invalid highlight location:', location, e)
          return Decoration.none
        }
      }
    }

    return decorations.map(transaction.changes)
  },
  provide: (field) => EditorView.decorations.from(field),
})

const errorLineDecoration = Decoration.line({ class: 'cm-error-line' })

const errorField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none
  },
  update(decorations, transaction) {
    for (const effect of transaction.effects) {
      if (effect.is(setErrorEffect)) {
        const errors = effect.value
        const newDecorations = errors
          .filter((e) => e.line > 0) // Only consider errors with a valid line number
          .map((e) => {
            try {
              const line = transaction.state.doc.line(e.line)
              return errorLineDecoration.range(line.from, line.from)
            } catch (error) {
              console.warn(
                `Invalid line number ${e.line} for error: ${e.message}`
              )
              return null
            }
          })
          .filter((decoration) => decoration !== null) // Remove any null decorations
        return Decoration.set(newDecorations)
      }
    }
    return decorations.map(transaction.changes)
  },
  provide: (field) => EditorView.decorations.from(field),
})

interface EditorContainerProps {
  value: string
  onChange: (value: string) => void
  errors?: CompilationError[]
  activeLocation: SourceLocation | null
}

export const EditorContainer: React.FC<EditorContainerProps> = ({
  value,
  onChange,
  errors = [],
  activeLocation,
}) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const { resolvedTheme } = useTheme()

  console.log('EditorContainer received activeLocation:', activeLocation)

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
        //syntaxHighlighting(customHighlightStyle),
        nord,
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        cpp(),
        highlightField,
        errorField,
        // Listen for updates and call the onChange prop
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString())
          }
        }),
        EditorView.theme({
          '&': {
            height: '100%',
            backgroundColor: 'transparent',
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
          '&.cm-focused .cm-cursor': {
            borderLeftColor: '#aaa !important',
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
  }, [onChange, resolvedTheme]) // Only re-run if the onChange callback changes

  useEffect(() => {
    const view = viewRef.current
    if (view) {
      const currentCodeInEditor = view.state.doc.toString()
      const docChanged = value !== currentCodeInEditor

      view.dispatch({
        ...(docChanged && {
          changes: { from: 0, to: currentCodeInEditor.length, insert: value },
        }),
        // This dispatch contains ONLY the error effect
        effects: [
          setErrorEffect.of(errors),
          setHighlightEffect.of(activeLocation),
        ],
      })
    }
  }, [value, errors])

  // --- This effect ONLY handles highlighting ---
  useEffect(() => {
    const view = viewRef.current
    if (view) {
      console.log(
        'Highlight effect is firing. Dispatching location:',
        activeLocation
      )
      // This dispatch contains ONLY the highlight effect
      view.dispatch({
        effects: [setHighlightEffect.of(activeLocation)],
      })
    }
  }, [activeLocation])

  return <div ref={editorRef} className="h-full w-full overflow-auto"></div>
}
