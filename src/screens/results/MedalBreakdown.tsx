import { useAtomValue } from 'jotai'
import { resultHistory } from '../../store/game'
import { MEDALS, NONE_MEDAL } from '../../const/medals'
import { useMemo } from 'react'
import classNames from 'classnames'

export const MedalBreakdown = () => {
  const history = useAtomValue(resultHistory)

  const medalCounts = useMemo(() => {
    const medals = MEDALS.map((medal) => {
      return {
        count: 0,
        emoji: medal.emoji,
        difference: medal.differenceFromOptimal
      }
    })
    const noneMedal = {
      count: 0,
      emoji: NONE_MEDAL.emoji
    }

    history.forEach((result) => {
      const differenceFromOptimal = result.wordsUsed - result.perfectSolutionWordsUsed
      const medal = medals.find((medal) => medal.difference === differenceFromOptimal) ?? noneMedal
      medal.count++
    })

    return [...medals, noneMedal]
  }, [history.length])

  const mostPopularMedal = useMemo(() => {
    return medalCounts.reduce((prev, current) => {
      return prev.count > current.count ? prev : current
    })
  }, [medalCounts])

  return (
    <div className="flex w-full flex-col gap-4 max-w-[350px]">
      {medalCounts.map((medal) => {
        return (
          <MedalChartItem
            key={medal.emoji + '-medal-result-item'}
            emoji={medal.emoji}
            amount={medal.count}
            percentage={(medal.count / mostPopularMedal.count) * 100}
            isPrimary={medal.emoji === mostPopularMedal.emoji}
          />
        )
      })}
    </div>
  )
}

const MedalChartItem = (props: {
  emoji: string
  amount: number
  percentage: number
  isPrimary: boolean
}) => {
  return (
    <div className="flex w-full items-center">
      <div className="text-2xl">{props.emoji}</div>
      <div className="ml-2 flex flex-1">
        <div
          style={{ height: 27, minWidth: `${props.percentage}%` }}
          className={classNames(
            `flex items-center justify-end rounded-br-md rounded-tr-md px-2 text-sm`,
            {
              'bg-green-400': props.isPrimary,
              'bg-gray-300': !props.isPrimary
            }
          )}
        >
          {props.amount}
        </div>
      </div>
    </div>
  )
}
