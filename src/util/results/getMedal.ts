import { MEDALS, NONE_MEDAL } from '../../const/medals'
import { lettersForToday } from '../lottery/letters'
import { generateSolution } from '../solution/generateSolution'

export const getMedal = (wordsUsed: number) => {
  const solutionWordsUsed = generateSolution(lettersForToday()).length
  const difference = Math.abs(solutionWordsUsed - wordsUsed)

  let medal = MEDALS.find((medal) => {
    return medal.differenceFromOptimal === difference
  })
  if (!medal) {
    medal = NONE_MEDAL
  }
  return medal
}
