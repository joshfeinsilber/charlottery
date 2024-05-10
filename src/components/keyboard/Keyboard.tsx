import { Key } from './Key'
import { IKeyActionType, KEYBOARD_ROWS } from './Keys'

export const Keyboard = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {KEYBOARD_ROWS.map((row, rowIndex) => {
        return (
          <div className="flex gap-1.5 my-0.5 w-full mb-1.5">
            <Spacer rowIndex={rowIndex} />
            {row.map((key) => (
              <Key
                key={key.content?.toString()}
                size={key.action.type !== IKeyActionType.letter ? 1.5 : 1}
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
