import { atomWithLocalStorage } from '../util/storage/atomWithSeedStorage'

export enum Screen {
  intro = 'intro',
  reveal = 'reveal',
  game = 'game'
}

export const screen = atomWithLocalStorage('screen', Screen.intro)
