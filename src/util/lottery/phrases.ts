import { NAMES, NOUNS } from '../../const/phrases'
import { getRandomItemFromArray } from './seed'

export const phraseName = () => getRandomItemFromArray(NAMES)
export const phraseNoun = () => getRandomItemFromArray(NOUNS)

export const fullPhrase = () => `${phraseName()}'s ${phraseNoun()}`
