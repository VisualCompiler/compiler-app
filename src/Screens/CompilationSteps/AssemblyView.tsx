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
import { gas } from '@codemirror/legacy-modes/mode/gas'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Play, StepForward, RotateCcw, Pause } from 'lucide-react'
import { convertAssemblyToBinary } from '@/lib/assemblyUtils'
import type { BinaryLine } from '@/lib/assemblyUtils'
import { Toggle } from '@/components/ui/toggle'
import {
  X86_REGISTERS,
  UnicornEmulator,
  EMULATOR_CONFIG,
} from '@/lib/emulatorConfig'
import '@/lib/consoleExtension'
import type {
  AssemblyInstruction,
  AstNode,
  SourceLocation,
  AstNodeHashTable,
} from '@/Hooks/useCompilationSteps'

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
  asmCodeForEmulator: string
  instructions: AssemblyInstruction
  astNodeHashTable: AstNodeHashTable
  activeLocation: SourceLocation | null
  setActiveLocation: (location: SourceLocation | null) => void
}

interface ExecutionState {
  currentInstruction: number
  stepCount: number
  registers: Map<string, number>
  memory: Map<number, number>
}

const findAstNodeById = (
  astNodeHashTable: AstNodeHashTable,
  id: string | null
): AstNode | null => {
  if (!id) return null
  const entry = astNodeHashTable[id]
  return entry ? entry.node : null
}

export const AssemblyView: React.FC<AssemblyViewProps> = ({
  asmCodeForEmulator,
  instructions,
  astNodeHashTable,
  activeLocation,
  setActiveLocation,
}) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const { resolvedTheme } = useTheme()
  const [binaryLines, setBinaryLines] = useState<BinaryLine[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [showMachineCode, setShowMachineCode] = useState(true)

  const parseInstructions = (raw: string | object) => {
    if (typeof raw === 'string') {
      // Ensure it’s valid JSON by wrapping in []
      const fixed = `[${raw.trim().replace(/}\s*{/g, '},{')}]`
      return JSON.parse(fixed)
    }
    return raw
  }

  // Execution state
  const [emulator, setEmulator] = useState<UnicornEmulator | null>(null)
  const [executionState, setExecutionState] = useState<ExecutionState>({
    currentInstruction: 0,
    stepCount: 0,
    registers: new Map(),
    memory: new Map(),
  })
  const [isExecuting, setIsExecuting] = useState(false)
  const [currentRegisters, setCurrentRegisters] = useState<Map<string, number>>(
    new Map()
  )

  const [executionSpeed, setExecutionSpeed] = useState(200)
  const [lastExecutedLine, setLastExecutedLine] = useState<number | null>(null)
  const [isStepping, setIsStepping] = useState(false)
  const [memoryStartAddress, setMemoryStartAddress] = useState(
    EMULATOR_CONFIG.STACK_SEGMENT_START + EMULATOR_CONFIG.STACK_SIZE - 8
  )
  const [isPaused, setIsPaused] = useState(false)
  const [stackSortOrder, setStackSortOrder] = useState<'asc' | 'desc'>('desc')
  const [hasError, setHasError] = useState(false)
  const isPausedRef = useRef(false)
  const executionStateRef = useRef<ExecutionState>({
    currentInstruction: 0,
    stepCount: 0,
    registers: new Map(),
    memory: new Map(),
  })

  const prevRegistersRef = useRef<Map<string, number>>(new Map())
  const prevMemoryRef = useRef<Map<number, number>>(new Map())
  const [elevatedRegisters, setElevatedRegisters] = useState<Set<string>>(
    new Set()
  )
  const [elevatedMemory, setElevatedMemory] = useState<Set<number>>(new Set())

  const updateExecutionState = (updates: Partial<ExecutionState>) => {
    setExecutionState((prev) => {
      const newState = { ...prev, ...updates }
      executionStateRef.current = newState
      return newState
    })
  }

  // Function to detect register changes and update elevation
  const detectRegisterChanges = (newRegisters: Map<string, number>) => {
    const changedRegisters = new Set<string>()
    const prevRegisters = prevRegistersRef.current

    for (const [regName, newValue] of newRegisters) {
      const prevValue = prevRegisters.get(regName)
      if (prevValue !== undefined && prevValue !== newValue) {
        changedRegisters.add(regName)
      }
    }

    if (changedRegisters.size > 0) {
      setElevatedRegisters(changedRegisters)
      const elevationDuration = isExecuting ? executionSpeed : 1000
      setTimeout(() => {
        setElevatedRegisters(new Set())
      }, elevationDuration)
    }

    prevRegistersRef.current = new Map(newRegisters)
  }

  // Function to detect memory changes and update elevation
  const detectMemoryChanges = (startAddr: number, endAddr: number) => {
    console.log(
      'detectMemoryChanges called - emulator:',
      emulator,
      'startAddr:',
      startAddr,
      'endAddr:',
      endAddr
    )
    if (!emulator) {
      console.log('detectMemoryChanges: emulator not initialized, returning')
      return // Don't detect changes if emulator is not initialized
    }

    const changedMemory = new Set<number>()
    const prevMemory = prevMemoryRef.current

    for (let addr = startAddr; addr <= endAddr; addr += 8) {
      const data = emulator.readMemory(addr, 8)
      if (data) {
        const currentValue = Array.from(data).reduce(
          (acc, byte, index) => acc + (byte << (index * 8)),
          0
        )
        const prevValue = prevMemory.get(addr)

        if (prevValue !== undefined && prevValue !== currentValue) {
          changedMemory.add(addr)
        }

        prevMemory.set(addr, currentValue)
      }
    }

    if (changedMemory.size > 0) {
      setElevatedMemory(changedMemory)
      const elevationDuration = isExecuting ? executionSpeed : 1000
      setTimeout(() => {
        setElevatedMemory(new Set())
      }, elevationDuration)
    }
  }

  const resetProgramCounter = () => {
    if (emulator) {
      emulator.setRegister(
        window.uc.X86_REG_RIP,
        EMULATOR_CONFIG.CODE_SEGMENT_START
      )
    }
  }

  const getInstructionLines = () => {
    return binaryLines.filter((line) => line.type === 'instruction')
  }

  const resetExecutionState = () => {
    const mainAddress = getMainFunctionAddress();
    const startAddress = mainAddress || EMULATOR_CONFIG.CODE_SEGMENT_START;
    updateExecutionState({
      currentInstruction: startAddress,
      stepCount: 0,
      registers: new Map(),
      memory: new Map(),
    })
    setLastExecutedLine(null)
  }

  const handleAssemblyConversion = async (assemblyCode: string) => {
    /* assemblyCode = `
    push rbp
    mov rbp, rsp
    sub rsp, 0x10
        mov [rbp-0x8], rax
        mov [rbp-0x4], rax
        mov eax, [rbp-0x8]
    ` */
    setIsConverting(true)
    try {
      const lines = await convertAssemblyToBinary(assemblyCode)
      setBinaryLines(lines)
    } catch (err) {
      console.assemblingError(
        `Assembly conversion failed: ${
          err instanceof Error ? err.message : String(err)
        }`,
        err
      )
      setBinaryLines([])
    } finally {
      setIsConverting(false)
    }
  }

  const handleMouseLeave = () => {
    setActiveLocation(null)
  }

  useEffect(() => {
    if (!editorRef.current || showMachineCode) return

    const state = EditorState.create({
      doc: asmCodeForEmulator,
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
        StreamLanguage.define(gas),
        EditorState.readOnly.of(true),
        EditorView.domEventHandlers({
          click: (event, view) => {
            const rect = view.dom.getBoundingClientRect()
            const y = event.clientY - rect.top
            const lineBlock = view.lineBlockAtHeight(y)
            const lineNumber = view.state.doc.lineAt(lineBlock.from).number
            const lineText = view.state.doc.line(lineNumber).text.trim()

            console.log('instructions', instructions)
            // Find instruction that matches the clicked line text
            const instructionsObject = parseInstructions(instructions)
            const instructionsArray = instructionsObject?.body ?? []
            console.log('instructions:', instructions)
            console.log('instructionsArray:', instructionsArray)
            console.log('Clicked line:', lineText)
            console.log(
              'Available instructions:',
              instructionsArray.map((inst: any) => inst.code)
            )

            const matchingInstruction = instructionsArray.find(
              (inst: any) => inst.code && inst.code.trim() === lineText.trim()
            )

            console.log('Matching instruction:', matchingInstruction)

            if (matchingInstruction?.sourceId) {
              console.log('SourceId found:', matchingInstruction.sourceId)
              const node = findAstNodeById(
                astNodeHashTable,
                matchingInstruction.sourceId || null
              )
              console.log('Found AST node:', node)
              if (node?.location) {
                setActiveLocation(node.location)
              } else {
                console.log('No location found on AST node')
              }
            } else {
              console.log('No matching instruction or sourceId found')
              setActiveLocation(null)
            }
          },
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
        }),
      ],
    })

    const view = new EditorView({ state, parent: editorRef.current })
    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
  }, [instructions, resolvedTheme, showMachineCode])

  useEffect(() => {
    console.log('Instructions changed:', instructions)
    if (asmCodeForEmulator && asmCodeForEmulator.trim()) {
      handleAssemblyConversion(asmCodeForEmulator)
    } else {
      setBinaryLines([])
    }
  }, [instructions])

  // Initialize emulator when binary lines are available
  useEffect(() => {
    console.log(
      'Emulator initialization check - binaryLines.length:',
      binaryLines.length,
      'emulator:',
      emulator
    )
    if (binaryLines.length > 0 && !emulator) {
      console.log('Creating new emulator')
      const newEmulator = new UnicornEmulator()
      console.log('Emulator created, initializing...')
      if (newEmulator.initialize()) {
        setEmulator(newEmulator);
        // Count only actual instructions (not directives or labels)
        const instructionLines = getInstructionLines();
        const totalBytes = instructionLines.reduce(
          (sum, line) => sum + line.bytes.length,
          0
        );
        const mainAddress = getMainFunctionAddress();
        const startAddress = mainAddress || EMULATOR_CONFIG.CODE_SEGMENT_START;
        
        if (mainAddress) {
          console.log(`Emulator initialized - execution will start from main function at address 0x${mainAddress.toString(16)}`);
        } else {
          console.log(`Emulator initialized - no main function found, no execution will be possible`);
        }
        
        const initialState: ExecutionState = {
          currentInstruction: startAddress,
          stepCount: 0,
          registers: new Map(),
          memory: new Map(),
        }

        if (totalBytes <= 0) {
          console.log('No bytes to load, skipping execution state setup')
        } else {
          console.log('Setting execution state with totalBytes:', totalBytes)
          setExecutionState(initialState)
          executionStateRef.current = initialState
        }
      } else {
        console.log('Emulator initialization failed')
      }
    }
  }, [binaryLines, emulator])

  useEffect(() => {
    return () => {
      if (emulator) {
        emulator.close()
      }
    };
  }, [emulator]);

  // Set up emulator hooks

  // Update register values from emulator
  const updateRegisters = (emu: UnicornEmulator) => {
    const registerMap = new Map<string, number>()

    for (const reg of X86_REGISTERS) {
      const value = emu.getRegister(reg.id)
      if (value !== null) {
        registerMap.set(reg.name, value)
      }
    }

    setCurrentRegisters(registerMap)
    detectRegisterChanges(registerMap)
  }

  // Convert binary lines to machine code bytes
  const binaryLinesToMachineCode = (lines: BinaryLine[]): Uint8Array => {
    const bytes: number[] = []

    // Only include instruction lines (skip directives and labels)
    const instructionLines = lines.filter((line) => line.type === 'instruction')

    for (const line of instructionLines) {
      if (line.bytes && line.bytes.length > 0) {
        for (const hexByte of line.bytes) {
          const byte = parseInt(hexByte, 16)
          if (!isNaN(byte)) {
            bytes.push(byte)
          }
        }
      }
    }
    return new Uint8Array(bytes)
  }

  // Load assembly code into emulator
  const loadAssemblyCode = async (): Promise<boolean> => {
    if (!emulator || !binaryLines.length) {
      console.emulationError(
        'Cannot load assembly code: emulator or binary lines not available',
        undefined,
        'emulator-not-available'
      )
      return false
    }

    try {
      const machineCode = binaryLinesToMachineCode(binaryLines)
      const codeStart = EMULATOR_CONFIG.CODE_SEGMENT_START

      emulator.writeMemory(codeStart, machineCode)

      resetStackPointer();

      const mainAddress = getMainFunctionAddress();
      const startAddress = mainAddress || codeStart;
      
      if (mainAddress) {
        console.log(`Execution starting from main function at address 0x${mainAddress.toString(16)}`);
      } else {
        console.log(`No main function found, execution starting from code beginning at address 0x${codeStart.toString(16)}`);
      }
      
      updateExecutionState({
        stepCount: 0,
        currentInstruction: startAddress,
        registers: new Map(),
        memory: new Map(),
      })
      return true
    } catch (error) {
      console.emulationError(
        `Failed to load assembly code: ${
          error instanceof Error ? error.message : String(error)
        }`,
        error,
        'assembly-load-failed'
      )
      return false
    }
  }

  const runInterval = useRef<NodeJS.Timeout | null>(null)

  const handleRun = () => {
    if (!emulator) return;

    // Check if there's a main function to execute
    const mainAddress = getMainFunctionAddress();
    if (!mainAddress) {
      console.log("Cannot execute - no main function found");
      return;
    }

    console.log("Starting execution - setting isExecuting to true");
    setIsExecuting(true);

    if (!isPausedRef.current && runInterval.current)
      clearInterval(runInterval.current)

    runInterval.current = setInterval(() => {
      const programEnd =
        EMULATOR_CONFIG.CODE_SEGMENT_START +
        binaryLinesToMachineCode(binaryLines).length
      const currentIP = emulator.getInstructionPointer()!

      if (!isPausedRef.current && !hasError && currentIP >= programEnd) {
        clearInterval(runInterval.current!);
        console.log("Program completed - setting isExecuting to false");
        setIsExecuting(false);
        return;
      }
      handleStep()
    }, executionSpeed)
  }

  const handleStep = async () => {
    const currentState = executionStateRef.current
    if (!emulator || !binaryLines.length) {
      console.emulationError(
        'Cannot execute step: emulator or binary lines not available',
        undefined,
        "step-execution-not-available"
      );
      return;
    }

    // Check if there's a main function to execute
    const mainAddress = getMainFunctionAddress();
    if (!mainAddress) {
      console.log("Cannot execute step - no main function found");
      return;
    }

    // Only set isStepping to true for manual steps, not during automatic execution
    if (isManualStep) {
      console.log("Manual step - setting isStepping to true");
      setIsStepping(true);
    } else {
      console.log("Automatic step - not changing isStepping state");
    }

    // Find the instruction that's about to be executed
    const instructionToExecute = currentState.currentInstruction
    const instructionLineIndex = binaryLines.findIndex(
      (line) =>
        line.offset === instructionToExecute && line.type === 'instruction'
    )

    try {
      if (currentState.stepCount == 0) {
        await loadAssemblyCode()
        resetStackPointer()
      }

      // Check if we're about to execute a ret instruction in the _start function
      const currentIP = currentState.currentInstruction
      const currentLine = binaryLines.find(
        (line) => line.offset === currentIP && line.type === 'instruction'
      )

      // If we're about to execute ret, check if we're in the _start function
      if (currentLine && currentLine.line?.trim() === 'ret') {
        // Find the _start function label
        const startFunctionLine = binaryLines.find(
          (line) => line.type === 'label' && line.line?.includes('_start')
        )

        if (startFunctionLine) {
          // Find the next function label after _start to determine the _start function's end
          const startFunctionIndex = binaryLines.findIndex(
            (line) => line === startFunctionLine
          )

          // Look for the next function label after _start
          let nextFunctionIndex = -1
          for (let i = startFunctionIndex + 1; i < binaryLines.length; i++) {
            if (
              binaryLines[i].type === 'label' &&
              binaryLines[i].line &&
              !binaryLines[i].line.startsWith('.')
            ) {
              // Skip local labels
              nextFunctionIndex = i
              break
            }
          }

          // Determine the end of _start function
          const startFunctionEnd =
            nextFunctionIndex !== -1
              ? binaryLines[nextFunctionIndex].offset
              : EMULATOR_CONFIG.CODE_SEGMENT_START +
                binaryLinesToMachineCode(binaryLines).length

          // Check if current IP is within the _start function
          if (
            currentIP >= startFunctionLine.offset &&
            currentIP < startFunctionEnd
          ) {
            // We're in _start function and about to execute ret
            // Don't execute the ret, just reset the program
            console.log("main function completed, resetting program");

            // Stop execution
            if (runInterval.current) {
              clearInterval(runInterval.current)
              setIsExecuting(false)
            }

            // Reset for next run
            resetExecutionState()
            resetProgramCounter()
            return
          }
        }
      }

      // Execute one instruction using start with count=1
      emulator.start(
        currentState.currentInstruction || 0,
        EMULATOR_CONFIG.CODE_SEGMENT_START +
          binaryLinesToMachineCode(binaryLines).length,
        1
      )

      updateRegisters(emulator)
      const nextInstruction = emulator.getInstructionPointer()

      if (nextInstruction !== null) {
        const newStepCount = currentState.stepCount + 1

        updateExecutionState({
          currentInstruction: nextInstruction,
          stepCount: newStepCount,
          registers: currentState.registers,
          memory: currentState.memory,
        })

        // Mark the instruction that was just executed as successfully executed
        if (instructionLineIndex !== -1) {
          setLastExecutedLine(instructionLineIndex)
        }

        // Check if we've reached the end of the program or if _start function returned
        const programEnd =
          EMULATOR_CONFIG.CODE_SEGMENT_START +
          binaryLinesToMachineCode(binaryLines).length
        const currentIP = emulator.getInstructionPointer()!

        // Stop execution if we've reached the end of the program
        // or if we're executing a ret instruction in the _start function
        if (currentIP >= programEnd) {
          console.log("Program execution completed, stopping execution");
          // Stop the execution
          if (runInterval.current) {
            clearInterval(runInterval.current)
            setIsExecuting(false)
          }
          // Reset for next run
          handleReset();
        }
      }
    } catch (error) {
      console.emulationError(
        `Step execution failed: ${
          error instanceof Error ? error.message : String(error)
        }`,
        error,
        'step-execution-failed'
      )
      // Mark the instruction that failed
      if (instructionLineIndex !== -1) {
        setLastExecutedLine(instructionLineIndex)
      }
      handleEmulationError()
    } finally {
      // Only set isStepping to false for manual steps
      if (isManualStep) {
        console.log("Manual step completed - setting isStepping to false");
        setIsStepping(false);
      }
    }
  };

  function resetStackPointer() {
    if (!emulator) return // Don't reset if emulator is not initialized

    emulator.setRegister(
      window.uc.X86_REG_RSP,
      EMULATOR_CONFIG.STACK_SEGMENT_START + EMULATOR_CONFIG.STACK_SIZE - 0x8
    )
  }

  const handleEmulationError = () => {
    setHasError(true)
    resetProgramCounter()
    resetStackPointer()
    resetExecutionState()
    // Reset UI state
    setIsExecuting(false)
    setIsStepping(false)
    setIsPaused(false)
    isPausedRef.current = false

    setTimeout(() => {
      setHasError(false)
      setLastExecutedLine(null)
    }, 3000)
  }

  const handleStopResume = () => {
    if (isPaused) {
      // Resume
      console.log("Resuming execution");
      isPausedRef.current = false;
      setIsPaused(false);
      setIsExecuting(true);
      
      // Restart the interval without calling handleRun (which would reset execution)
      runInterval.current = setInterval(() => {
        if (!emulator) return;
        const programEnd =
          EMULATOR_CONFIG.CODE_SEGMENT_START +
          binaryLinesToMachineCode(binaryLines).length;
        const currentIP = emulator.getInstructionPointer()!;

        if (!isPausedRef.current && !hasError && currentIP >= programEnd) {
          clearInterval(runInterval.current!);
          console.log("Program completed - setting isExecuting to false");
          setIsExecuting(false);
          return;
        }
        handleStep();
      }, executionSpeed);
    } else {
      // Pause
      console.log("Pausing execution");
      isPausedRef.current = true;
      if (runInterval.current) clearInterval(runInterval.current);
      setIsPaused(true);
      setIsExecuting(false);
    }
  }

  const handleReset = () => {
    if (emulator) {
      emulator.stop();
      setCurrentRegisters(new Map());
      // setCurrentMemory(new Map());
      setIsExecuting(false);
      setIsStepping(false);
      setIsPaused(false);
      isPausedRef.current = false;
      setLastExecutedLine(null);
      setHasError(false);
      emulator?.close();
      setEmulator(null);
    }
  }

  // Clean up editor when switching to machine code view
  useEffect(() => {
    if (showMachineCode && viewRef.current) {
      viewRef.current.destroy()
      viewRef.current = null
    }
  }, [showMachineCode])

  const asmCode = asmCodeForEmulator.split('\n')
  return (
    <div className="flex h-full w-full flex-col overflow-clip">
      <div className="border-b border-border bg-muted/50">
        <div className="flex items-center m-1 justify-between">
          <div className="flex items-center space-x-2">
            <Toggle
              variant="default"
              size="sm"
              className={`px-3 transition-colors ${
                showMachineCode
                  ? 'border-amber-200 bg-amber-800/50 text-amber-100'
                  : 'border-muted-foreground/30 bg-muted/50 text-muted-foreground'
              }`}
              onClick={() => setShowMachineCode(!showMachineCode)}
            >
              {showMachineCode ? 'Hide Machine Code' : 'Display Machine Code'}
            </Toggle>

            {/* Execution Status */}
            {executionState && (
              <div className="flex items-center space-x-2 text-xs">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isExecuting ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                  }`}
                />
                <span className="text-muted-foreground">
                  {isExecuting ? 'Executing' : 'Ready'} | Step:{' '}
                  {executionState.currentInstruction.toString(16)}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                className="w-20 h-2 bg-foreground/20 rounded-lg appearance-none cursor-pointer"
                onChange={(e) => setExecutionSpeed(parseInt(e.target.value))}
                title="Execution Speed (ms)"
              />
              <span className="text-xs text-muted-foreground w-12">
                {executionSpeed}ms
              </span>
            </div>
            <Button
              variant="outline"
              className="px-6 border-emerald-700! bg-emerald-700/20! transition-colors"
              onClick={handleRun}
              disabled={isExecuting || isStepping || !binaryLines.length || !getMainFunctionAddress()}
            >
              <Play className="h-4 w-4" />
              {isExecuting ? 'Running...' : 'Run'}
            </Button>
            <Button
              variant="outline"
              className="px-6 border-yellow-600! bg-yellow-600/20! transition-colors"
              onClick={() => handleStep(true)}
              disabled={isExecuting || isStepping || !binaryLines.length || !getMainFunctionAddress()}
            >
              <StepForward className="h-4 w-4" />
              {isStepping ? 'Stepping...' : 'Step'}
            </Button>
            <Button
              variant="outline"
              className={`px-6 transition-colors ${
                isPaused
                  ? 'border-green-600! bg-green-600/20!'
                  : 'border-red-600! bg-red-600/20!'
              }`}
              onClick={handleStopResume}
              disabled={!isExecuting && !isPaused}
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4" />
                  Pause
                </>
              )}
            </Button>
            <Button
              variant="outline"
              className="px-6 border-blue-600! bg-blue-600/20! transition-colors"
              onClick={handleReset}
              disabled={!executionState}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      <div className="border-r border-border flex flex-col lg:flex-row h-full min-h-0">
        <div className="flex-1 overflow-auto">
          {showMachineCode ? (
            <div className="p-4 space-y-3">
              {/* Code View */}
              <h3 className="text-sm font-semibold text-foreground border-b border-border pb-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
                Code
              </h3>
              <div ref={machineCodeContainerRef} className="space-y-1">
                {isConverting && (
                  <div className="p-2 text-center text-muted-foreground">
                    Converting assembly...
                  </div>
                )}
                {!asmCodeForEmulator || !asmCodeForEmulator.trim() ? (
                  <div className="p-4 text-center text-muted-foreground">
                    <div className="text-sm font-medium mb-2">
                      No Code Available
                    </div>
                    <div className="text-xs"></div>
                  </div>
                ) : binaryLines.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    <div className="text-sm font-medium mb-2">
                      Assembly Conversion Failed
                    </div>
                    <div className="text-xs">
                      Check the console for error details.
                    </div>
                  </div>
                ) : (
                  binaryLines.map((line, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) {
                          lineRefs.current.set(index, el);
                        } else {
                          lineRefs.current.delete(index);
                        }
                      }}
                      className={`p-2 rounded text-xs font-mono transition-colors ${
                        hasError &&
                        lastExecutedLine === index &&
                        line.type === 'instruction'
                          ? 'bg-red-500/30 border-2 border-red-500/50 shadow-lg'
                          : lastExecutedLine === index &&
                            line.type === 'instruction'
                          ? 'bg-green-500/30 border-2 border-green-500/50 shadow-lg'
                          : line.type === 'directive'
                          ? 'bg-purple-500/20 border border-purple-500/30'
                          : line.type === 'label'
                          ? 'bg-blue-500/20 border border-blue-500/30'
                          : 'bg-muted/30 hover:bg-muted/50'
                      } text-foreground`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        {line.type === 'instruction' ? (
                          <span className="text-muted-foreground text-xs">
                            0x{line.offset.toString(16).padStart(8, '0')}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-xs">
                            —
                          </span>
                        )}
                        <span className="text-muted-foreground text-xs">
                          L{index}
                        </span>
                      </div>
                      <div className="mb-1">{line.line}</div>
                      {line.type === 'directive' ? (
                        <div className="text-purple-500 text-xs italic">
                          Directive
                        </div>
                      ) : line.type === 'label' ? (
                        <div className="text-blue-500 text-xs italic">
                          Label
                        </div>
                      ) : (
                        <div className="font-medium text-primary">
                          {line.bytes.slice().reverse().join(' ')}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            // <div ref={editorRef} className="h-full"></div>
            <div className="p-2 font-mono text-sm overflow-auto h-full">
              {asmCode.map((_, index) => {
                const isHeader = index === 0
                const instructionIndex = index - 1
                const instr = !isHeader
                  ? instructions?.body?.[instructionIndex]
                  : null

                const correspondingAstNode = instr
                  ? findAstNodeById(astNodeHashTable, instr.sourceId || null)
                  : null
                const isHighlighted =
                  activeLocation &&
                  correspondingAstNode &&
                  correspondingAstNode.location.startLine ===
                    activeLocation.startLine &&
                  correspondingAstNode.location.endLine ===
                    activeLocation.endLine &&
                  correspondingAstNode.location.startColumn ===
                    activeLocation.startColumn &&
                  correspondingAstNode.location.endColumn === activeLocation.endColumn

                return (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      const lineText = asmCode[index].trim()
                      const functions = parseInstructions(instructions) // array of functions
                      console.log('functions:', functions)

                      const allInstructions = functions.flatMap(
                        (fn: any) => fn.body || []
                      )
                      console.log('allInstructions:', allInstructions)

                      const matchingInstruction = allInstructions.find(
                        (inst: any) => inst.code && inst.code.trim() === lineText
                      )

                      console.log('Matching instruction:', matchingInstruction)

                      if (matchingInstruction?.sourceId) {
                        console.log(
                          'SourceId found:',
                          matchingInstruction.sourceId
                        )
                        const node = findAstNodeById(
                          astNodeHashTable,
                          matchingInstruction.sourceId || null
                        )
                        console.log('Found AST node:', node)
                        if (node?.location) {
                          setActiveLocation(node.location)
                        } else {
                          console.log('No location found on AST node')
                        }
                      } else {
                        console.log('No matching instruction or sourceId found')
                        setActiveLocation(null)
                      }
                    }}
                    onMouseLeave={handleMouseLeave}
                    // Apply conditional styling
                    className={`whitespace-pre px-2 py-1 rounded-md transition-colors cursor-pointer ${
                      isHighlighted
                        ? 'bg-yellow-200 dark:bg-yellow-800'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {asmCode[index]}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex-1 border-l border-border overflow-y-auto">
          <div className="p-4 space-y-3">
            {/* Registers View */}
            <h3 className="text-sm font-semibold border-b border-border pb-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
              Registers
            </h3>
            <div className="grid grid-cols-1 gap-1 text-xs font-mono">
              {X86_REGISTERS.map((register) => {
                const currentValue = currentRegisters.get(register.name)
                let displayValue

                if (currentValue !== undefined) {
                  // Convert to 8-byte array and format with spaces between bytes
                  // Handle large integers properly by using BigInt for precision
                  const value = BigInt(currentValue)
                  const bytes = []
                  for (let i = 7; i >= 0; i--) {
                    bytes.push(Number((value >> BigInt(i * 8)) & 0xffn))
                  }
                  displayValue = bytes
                    .map((b) => b.toString(16).padStart(2, '0'))
                    .join(' ')
                } else {
                  displayValue = register.value
                }

                // Color coding for different register groups
                const getRegisterColor = (regName: string) => {
                  if (regName === 'RSP') return 'text-orange-500'
                  if (regName === 'RBP') return 'text-teal-600'
                  if (regName === 'RIP') return 'text-amber-400'
                  else return 'text-muted-foreground' // Default
                }

                const textColor = getRegisterColor(register.name)
                const isElevated = elevatedRegisters.has(register.name)

                return (
                  <div
                    key={register.name}
                    className={`flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center p-2 bg-muted/30 rounded space-y-1 sm:space-y-0 ${textColor} transition-all duration-300 ${
                      isElevated
                        ? 'shadow-xs scale-103 border-2 border-yellow-400'
                        : ''
                    }`}
                  >
                    <span className="font-medium min-w-0">{register.name}</span>
                    <span className="text-primary font-mono text-xs break-all sm:break-words sm:text-right">
                      {displayValue}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Memory View - Wraps to separate column on large screens */}
        <div className="flex-1 border-l border-border overflow-y-auto">
          <div className="p-4 space-y-3">
            <div className="flex gap-3 items-center justify-between border-b border-border pb-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
              <h3 className="text-sm font-semibold text-foreground">Stack</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Start:</span>
                <input
                  type="text"
                  value={memoryStartAddress.toString(16)}
                  onChange={(e) => {
                    const value = e.target.value
                    // Allow hex input (with or without 0x prefix)
                    const hexValue = value.replace(/^0x/i, '')
                    if (/^[0-9a-fA-F]*$/.test(hexValue)) {
                      const numValue = parseInt(hexValue, 16)
                      if (hexValue == '') {
                        setMemoryStartAddress(0)
                      } else if (!isNaN(numValue) && numValue >= 0) {
                        setMemoryStartAddress(numValue)
                      }
                    }
                  }}
                  className="w-19 px-2 py-1 text-xs font-mono bg-muted/50 border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-muted-foreground">Order:</span>
                  <select
                    value={stackSortOrder}
                    onChange={(e) =>
                      setStackSortOrder(e.target.value as 'asc' | 'desc')
                    }
                    className="px-2 py-1 text-xs font-mono bg-muted/50 border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="desc">Desc</option>
                    <option value="asc">Asc</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-1 text-xs font-mono">
              {(() => {
                // Generate memory display starting from user-specified address (8-byte aligned)
                const memoryRows = []

                // Align the start address to 8-byte boundary
                const alignedStartAddress = memoryStartAddress & ~0x7

                // Define memory bounds
                const MIN_ADDRESS = EMULATOR_CONFIG.STACK_SEGMENT_START
                const MAX_ADDRESS =
                  EMULATOR_CONFIG.STACK_SEGMENT_START +
                  EMULATOR_CONFIG.STACK_SIZE -
                  8

                // Get register values for highlighting memory locations
                const rspValue = currentRegisters.get('RSP')
                const rbpValue = currentRegisters.get('RBP')
                const ripValue = currentRegisters.get('RIP')

                // Detect memory changes for the displayed range
                const startAddr =
                  stackSortOrder === 'desc'
                    ? alignedStartAddress - 49 * 8
                    : alignedStartAddress
                const endAddr =
                  stackSortOrder === 'desc'
                    ? alignedStartAddress
                    : alignedStartAddress + 49 * 8
                detectMemoryChanges(startAddr, endAddr)

                for (let i = 0; i < 50; i++) {
                  // Calculate address based on sort order
                  const addr =
                    stackSortOrder === 'desc'
                      ? alignedStartAddress - i * 8
                      : alignedStartAddress + i * 8

                  // Check if address is within valid bounds
                  if (addr < MIN_ADDRESS || addr > MAX_ADDRESS) {
                    break // Stop displaying if we go out of bounds
                  }

                  const data = emulator?.readMemory(addr, 8)
                  const dataStr = data
                    ? Array.from(data)
                        .map((b) => b.toString(16).padStart(2, '0'))
                        .reverse()
                        .join(' ')
                    : '00 00 00 00 00 00 00 00'

                  // Check which register points to this address and apply corresponding color
                  const getMemoryColor = () => {
                    if (rspValue !== undefined && addr === rspValue) {
                      return 'bg-orange-500/30'
                    }
                    if (rbpValue !== undefined && addr === rbpValue) {
                      return 'bg-teal-500/30'
                    }
                    if (ripValue !== undefined && addr === ripValue) {
                      return 'bg-amber-500/30'
                    }
                    return 'bg-muted/30'
                  }

                  const bgColor = getMemoryColor()
                  const isElevated = elevatedMemory.has(addr)

                  memoryRows.push(
                    <div
                      key={i}
                      className={`flex justify-between items-start p-2 ${bgColor} rounded gap-3 transition-all duration-300 ${
                        isElevated
                          ? 'shadow-lg scale-105 border-2 border-yellow-400'
                          : ''
                      }`}
                    >
                      <span className="text-muted-foreground font-medium text-xs flex-shrink-0">
                        0x{addr.toString(16).padStart(8, '0')}
                      </span>
                      <span className="text-primary font-mono text-xs text-right break-words min-w-0 flex-1">
                        {dataStr}
                      </span>
                    </div>
                  )
                }
                return memoryRows
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
