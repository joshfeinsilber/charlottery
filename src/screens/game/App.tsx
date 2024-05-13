import { useAtom } from 'jotai'
import { Keyboard } from '../../components/keyboard/Keyboard'
import { IKeyAction } from '../../components/keyboard/Keys'
import { LetterQueue } from './LetterQueue'
import { currentWord } from '../../store/game/word'
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
    <div className="flex w-full flex-col items-center">
      <Word />
      <LetterQueue />
      <div className="mt-4 flex w-full justify-center">
        <Keyboard onKeyPress={onKeyPress} />
      </div>
    </div>
  )
}
