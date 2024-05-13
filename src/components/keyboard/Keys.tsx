export enum IKeyActionType {
  letter = 'letter',
  backspace = 'backspace',
  submit = 'submit'
}

export interface IKeyAction {
  type: IKeyActionType
  value?: string
}

export interface IKey {
  content: string | React.ReactNode
  action: IKeyAction
  color?: {
    bg?: string
    activeBg?: string
    text?: string
  }
}

const FIRST_ROW: IKey[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => ({
  content: letter,
  action: { type: IKeyActionType.letter, value: letter }
}))
const SECOND_ROW: IKey[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => ({
  content: letter,
  action: { type: IKeyActionType.letter, value: letter }
}))
const THIRD_ROW: IKey[] = [
  {
    content: <span className="text-[0.75em] font-bold">ENTER</span>,
    action: { type: IKeyActionType.submit },
    color: {
      bg: 'green-600',
      activeBg: 'green-700',
      text: 'white'
    }
  },
  ...['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => ({
    content: letter,
    action: { type: IKeyActionType.letter, value: letter }
  })),
  {
    content: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
        />
      </svg>
    ),
    action: { type: IKeyActionType.backspace }
  }
]

export const KEYBOARD_ROWS: IKey[][] = [FIRST_ROW, SECOND_ROW, THIRD_ROW]
