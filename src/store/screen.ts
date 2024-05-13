import { atomWithSeedStorage } from '../util/storage/atomWithSeedStorage'

export enum Screen {
  intro = 'intro',
  reveal = 'reveal',
  game = 'game',
  results = 'results'
}

export const screen = atomWithSeedStorage('screen', Screen.intro)
