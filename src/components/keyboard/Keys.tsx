export enum IKeyActionType {
  letter = 'letter',
  backspace = 'backspace',
  submit = 'submit'
}

export interface IKey {
  content: string | React.ReactNode
  action: {
    type: IKeyActionType
    value?: string
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
    content: 'ENTER',
    action: { type: IKeyActionType.submit }
  },
  ...['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => ({
    content: letter,
    action: { type: IKeyActionType.letter, value: letter }
  })),
  {
    content: 'BSP',
    action: { type: IKeyActionType.backspace }
  }
]

export const KEYBOARD_ROWS: IKey[][] = [FIRST_ROW, SECOND_ROW, THIRD_ROW]
