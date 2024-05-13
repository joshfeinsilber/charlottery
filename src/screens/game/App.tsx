import { useAtom } from 'jotai'
import { Keyboard } from '../../components/keyboard/Keyboard'
import { IKeyAction } from '../../components/keyboard/Keys'
import { LetterQueue } from './LetterQueue'
import { currentWord } from '../../store/game'
import { Word } from './Word'
import { useEffect } from 'react'
import { lettersForToday } from '../../util/lottery/letters'

export const Game = () => {
  const [word, setWord] = useAtom(currentWord)

  // When the game begins, set the first letter
  useEffect(() => {
    setWord(lettersForToday()[0])
  }, [])

  const onKeyPress = (action: IKeyAction) => {
    if (action.type === 'letter') {
      setWord(word + action.value)
    } else if (action.type === 'backspace') {
      // Always keep the start letter
      if (word.length <= 1) {
        return
      }
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
