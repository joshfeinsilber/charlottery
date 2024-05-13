// May 12th, 2024
const startDate = new Date(1715497200 * 1000)

const daysFromStartDate = () =>
  Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

export const PUZZLE_NUMBER = (() => daysFromStartDate())()
