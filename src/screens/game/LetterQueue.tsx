import { useAtomValue } from 'jotai'
import { ILetterStatus, Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { getLettersWithPoints } from '../../util/game/getLettersWithPoints'

export const LetterQueue = () => {
  const word = useAtomValue(currentWord)
  const startLetterIndex = useAtomValue(currentStartLetterIndex)
  const letters = lettersForToday()

  const lettersWithPoints = getLettersWithPoints({
    letters,
    currentStartLetterIndex: startLetterIndex,
    currentWord: word
  })

  return (
    <div className="flex w-full max-w-[512px] gap-1 overflow-x-scroll">
      {letters.map((letter) => {
        return (
          <div className="shrink-0" key={'queue' + letter}>
            <Letter
              size={50}
              letter={letter}
              status={
                lettersWithPoints.includes(letter) ? ILetterStatus.point : ILetterStatus.default
              }
            />
          </div>
        )
      })}
    </div>
  )
}
