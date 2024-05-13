import { Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'

export const LetterQueue = () => {
  return (
    <div className="flex gap-2 overflow-visible">
      {lettersForToday().map((letter) => {
        return (
          <div className="shrink-0">
            <Letter size={70} key={letter} letter={letter} />
          </div>
        )
      })}
    </div>
  )
}
