import { LETTERS } from '../../const/letters'
import { shuffleArray } from './seed'

export const lettersForToday = () => {
  return shuffleArray([...LETTERS])
}
