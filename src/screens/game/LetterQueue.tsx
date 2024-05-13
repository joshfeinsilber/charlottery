import { Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'

export const LetterQueue = () => {
  return (
    <div className="flex w-full max-w-[512px] gap-1 overflow-x-scroll">
      {lettersForToday().map((letter) => {
        return (
          <div className="shrink-0" key={'queue' + letter}>
            <Letter size={50} letter={letter} />
          </div>
        )
      })}
    </div>
  )
}
