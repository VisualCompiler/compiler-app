import React, { useRef, useEffect } from 'react'
import { EditorState, StateField, StateEffect } from '@codemirror/state'
import { autocompletion } from '@codemirror/autocomplete'
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
import { useTheme } from 'next-themes'
import type { CompilationError } from '../../public/kotlin/CompilerLogic'

// --- Define our custom effects and fields ---

// An effect that will carry our array of errors
const setErrorEffect = StateEffect.define<CompilationError[]>()

// A decoration to apply a CSS class to a line
const errorLineDecoration = Decoration.line({ class: 'cm-error-line' })

// A StateField that will hold the decorations for all error lines
const errorField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none
  },
  update(decorations, transaction) {
    // Listen for our custom effect
    for (const effect of transaction.effects) {
      if (effect.is(setErrorEffect)) {
        const errors = effect.value
        const newDecorations = errors
          .filter((e) => e.line > 0) // Only consider errors with a valid line number
          .map((e) => {
            // CodeMirror's doc.line() is 1-based, matching our error line number
            const line = transaction.state.doc.line(e.line)
            return errorLineDecoration.range(line.from, line.from)
          })
        return Decoration.set(newDecorations)
      }
    }
    // If our effect isn't present, map the existing decorations through any document changes
    return decorations.map(transaction.changes)
  },
  // Provide this field as a source of decorations for the editor view
  provide: (field) => EditorView.decorations.from(field),
})

interface EditorContainerProps {
  value: string
  onChange: (value: string) => void
  errors?: CompilationError[]
}

export const EditorContainer: React.FC<EditorContainerProps> = ({
  value,
  onChange,
  errors = [],
}) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const { resolvedTheme } = useTheme()

  // This effect sets up the editor once
  useEffect(() => {
    if (!editorRef.current) return

    const themeExtension = resolvedTheme === 'dark' ? oneDark : []

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
        themeExtension,
        cpp(),
        errorField,
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
  }, [onChange, resolvedTheme]) // Only re-run if the onChange callback changes

  // This effect synchronizes the editor when the parents value prop changes
  useEffect(() => {
    const view = viewRef.current
    if (view) {
      const currentCodeInEditor = view.state.doc.toString()
      const docChanged = value !== currentCodeInEditor

      // update document and error
      const transaction = view.state.update({
        ...(docChanged && {
          changes: {
            from: 0,
            to: currentCodeInEditor.length,
            insert: value,
          },
        }),
        effects: [setErrorEffect.of(errors)],
      })

      view.dispatch(transaction)
      if (errors.length > 0) {
        const line = errors[0].line
        const linePos = view.state.doc.line(line).from
        view.dispatch({
          effects: EditorView.scrollIntoView(linePos, { y: 'center' }),
        })
      }
    }
  }, [value, errors])
  return (
    <div
      ref={editorRef}
      className="bg-secondary/50 h-full w-full overflow-auto"
    ></div>
  )
}
