import { Keyboard } from '../../components/keyboard/Keyboard'
import { LetterQueue } from './LetterQueue'

export const Game = () => {
  return (
    <div className="flex w-full flex-col">
      <LetterQueue />
      <div className="flex w-full justify-center mt-4">
        <Keyboard />
      </div>
    </div>
  )
}
