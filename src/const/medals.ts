export interface IMedal {
  name: string
  emoji: string
  differenceFromOptimal: number
}

export const MEDALS: IMedal[] = [
  {
    name: 'Perfection',
    emoji: '🏆',
    differenceFromOptimal: 0
  },
  {
    name: 'Gold',
    emoji: '🥇',
    differenceFromOptimal: 1
  },
  {
    name: 'Silver',
    emoji: '🥈',
    differenceFromOptimal: 2
  },
  {
    name: 'Bronze',
    emoji: '🥉',
    differenceFromOptimal: 3
  }
]

export const NONE_MEDAL: IMedal = {
  name: 'No',
  emoji: '🫤',
  differenceFromOptimal: -1
}
