import { ADJECTIVES, NAMES, NOUNS } from '../../const/phrases'
import { getRandomItemFromArray } from './seed'

export const phraseName = () => getRandomItemFromArray(NAMES)
export const phraseAdjective = () => getRandomItemFromArray(ADJECTIVES)
export const phraseNoun = () => getRandomItemFromArray(NOUNS)

export const fullPhrase = () => `${phraseName()}'s ${phraseAdjective()} ${phraseNoun()}`
