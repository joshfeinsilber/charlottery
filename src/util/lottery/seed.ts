import RandomNumberGenerator from 'rand-seed'

// Get seed based of today's date
export const seed = (() => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${year}-${month}-${day}`
})()

export const shuffleArray = <T>(array: T[]): T[] => {
  const rng = new RandomNumberGenerator(seed)

  // Perform Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const getRandomItemFromArray = <T>(array: T[]): T => {
  const rng = new RandomNumberGenerator(seed)
  const randomIndex = Math.floor(rng.next() * array.length)
  return array[randomIndex]
}
