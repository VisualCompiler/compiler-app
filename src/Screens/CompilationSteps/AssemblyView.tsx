import React, { useRef, useEffect, useState } from 'react'
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
import { Button } from '@/components/ui/button'
import { Play, StepForward } from 'lucide-react'
import { convertAssemblyToBinary } from '@/lib/assemblyUtils'
import type { BinaryLine } from '@/lib/assemblyUtils'
import { Toggle } from '@/components/ui/toggle'

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
  const [binaryLines, setBinaryLines] = useState<BinaryLine[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [showMachineCode, setShowMachineCode] = useState(true)

  const handleAssemblyConversion = async (assemblyCode: string) => {
    setIsConverting(true);
    try {
      const lines = await convertAssemblyToBinary(assemblyCode);
      setBinaryLines(lines);
    } catch (err) {
      console.error('Failed to convert assembly:', err);
      setBinaryLines([]);
    } finally {
      setIsConverting(false);
    }
  };
  
  useEffect(() => {
    if (!editorRef.current || showMachineCode) return

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
        EditorState.readOnly.of(true),
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
  }, [asmCode, resolvedTheme, showMachineCode])

  useEffect(() => {
    handleAssemblyConversion(asmCode)
  }, [asmCode])

  // Clean up editor when switching to machine code view
  useEffect(() => {
    if (showMachineCode && viewRef.current) {
      viewRef.current.destroy()
      viewRef.current = null
    }
  }, [showMachineCode])

  return (
    <div className="flex h-full w-full flex-col overflow-clip">
      <div className="border-b border-border bg-muted/50">
      {/*<h1 className="text-sm font-semibold text-foreground pl-2">Execute Code on emulator</h1>*/}
        <div className="flex items-center m-1 justify-between">
          <div className="flex items-center space-x-2">
            <Toggle 
              variant="outline"
              size="sm"
              className={`px-3 rounded-sm transition-colors ${
                showMachineCode 
                  ? 'border-muted-foreground/30 bg-muted/50 text-muted-foreground'
                  : 'border-amber-200/40 bg-amber-800/50 text-amber-100'
              }`}
              onClick={() => setShowMachineCode(!showMachineCode)}
            >
              {showMachineCode ? 'Hide Machine Code' : 'Display Machine Code'}
            </Toggle>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline"
              className="px-6 border-emerald-700! bg-emerald-700/20! transition-colors"
              onClick={() => console.log('Run clicked')}
            >
              <Play className="h-4 w-4" />
              Run
            </Button>
            <Button variant="outline"
              className="px-6 border-yellow-600! bg-yellow-600/20! transition-colors"
              onClick={() => console.log('Step clicked')}
            >
              <StepForward className="h-4 w-4" />
              Step
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-r border-border flex flex-row h-full min-h-0">
        <div className="flex-1 overflow-y-auto">
          {showMachineCode ? (
            <div className="p-2 space-y-1">
              {isConverting && (
                <div className="p-2 text-center text-muted-foreground">
                  Converting assembly...
                </div>
              )}
              {binaryLines.map((line, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-xs font-mono transition-colors bg-muted/30 hover:bg-muted/50 text-foreground`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-muted-foreground text-xs">
                      {line.address}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      L{line.lineNumber}
                    </span>
                  </div>
                  <div className="mb-1">{line.assembly}</div>
                  <div className="font-medium text-primary">
                    {line.binary}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div ref={editorRef} className="h-full"></div>
          )}
        </div>
        
        <div className="flex-1 border-l border-border overflow-y-auto">
          <div className="p-2 text-center text-muted-foreground">
            {/* registers and memrory will go here */}
          </div>
        </div>
      </div>
    </div>
  )
}