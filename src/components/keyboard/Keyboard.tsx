import { useEffect } from 'react'
import { Key } from './Key'
import { IKeyAction, IKeyActionType, KEYBOARD_ROWS } from './Keys'

interface Props {
  onKeyPress?: (action: IKeyAction) => void
}

export const Keyboard = (props: Props) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      let action!: IKeyAction

      if (key === 'enter') {
        action = { type: IKeyActionType.submit }
      } else if (key === 'backspace') {
        action = { type: IKeyActionType.backspace }
      }
      const matchingLetter = KEYBOARD_ROWS.flat().find(
        (keyboardKey) => keyboardKey.action.value === event.key
      )
      if (matchingLetter) {
        action = matchingLetter.action
      }

      if (action) {
        props.onKeyPress?.(action)
      }
    }
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [props.onKeyPress])

  return (
    <div className="flex w-full max-w-[512px] flex-col items-center">
      {KEYBOARD_ROWS.map((row, rowIndex) => {
        return (
          <div className="my-0.5 mb-1.5 flex w-full gap-1.5" key={`keyboard-row-${rowIndex}`}>
            <Spacer rowIndex={rowIndex} />
            {row.map((key) => (
              <Key
                key={'key-' + (key.action.value ?? key.action.type)}
                size={key.action.type !== IKeyActionType.letter ? 1.5 : 1}
                className={key.className}
                onClick={() => {
                  props.onKeyPress?.(key.action)
                  // @ts-ignore
                  document.activeElement?.blur() // Blur focus on the button after clicking so that if we use the Enter key, it doesn't trigger the button again
                }}
              >
                {key.content}
              </Key>
            ))}
            <Spacer rowIndex={rowIndex} />
          </div>
        )
      })}
    </div>
  )
}

const Spacer = (props: { rowIndex: number }) => {
  // Spacers are only used for the second row
  if (props.rowIndex === 1) {
    return <div style={{ flex: 0.5 }} />
  }
  return null
}
