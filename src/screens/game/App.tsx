import { useAtom } from 'jotai'
import { Keyboard } from '../../components/keyboard/Keyboard'
import { IKeyAction } from '../../components/keyboard/Keys'
import { LetterQueue } from './LetterQueue'
import { currentWord } from '../../store/game'
import { Word } from './Word'

export const Game = () => {
  const [word, setWord] = useAtom(currentWord)

  const onKeyPress = (action: IKeyAction) => {
    if (action.type === 'letter') {
      setWord(word + action.value)
    } else if (action.type === 'backspace') {
      setWord(word.slice(0, -1))
    }
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="flex w-full flex-1 items-center justify-center">
        <Word />
      </div>

      <div className="divider" />
      <LetterQueue />
      <div className="mt-4 flex w-full items-end justify-center">
        <Keyboard onKeyPress={onKeyPress} />
      </div>
    </div>
  )
}
