import { useSetAtom } from 'jotai'
import { Logo } from '../../components/Logo'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'
import { Screen, screen } from '../../store/screen'
import { fullPhrase } from '../../util/lottery/phrases'

export const Intro = () => {
  const setScreen = useSetAtom(screen)

  const today = new Date()
  const month = today.toLocaleString('default', { month: 'long' })
  const dayOfMonth = today.getDate()
  const year = today.getFullYear()

  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <LotteryIcon height={120} className={'-rotate-6'} />
      </div>

      <h2 className="mt-5 text-5xl">
        <Logo />
      </h2>
      <p className="mt-4 text-xl italic">Build words with every character in the alphabet.</p>
      <button
        className="btn btn-secondary btn-block mt-7"
        onClick={() => {
          ;(document.getElementById('tutorial') as HTMLDialogElement)?.showModal()
        }}
      >
        How To Play
      </button>
      <button
        className="btn btn-primary btn-lg btn-block mt-2"
        onClick={() => {
          setScreen(Screen.reveal)
        }}
      >
        Play
      </button>

      <p className="mt-8 text-xs font-bold">
        {month} {dayOfMonth}, {year}
      </p>
      <p className="text-xs">No. {PUZZLE_NUMBER}</p>
      <p className="text-xs">{fullPhrase()}</p>
    </div>
  )
}

const LotteryIcon = (props: { height: number; className: string }) => (
  <svg
    id="Capa_1"
    enableBackground="new 0 0 510 510"
    height="512"
    viewBox="0 0 510 510"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    style={{ height: props.height, maxWidth: '100%' }}
  >
    <g>
      <path
        d="m176.331 403.426-9.573 76.574 45.816 10 42.426-10v-60.098l-37.5-22.902z"
        fill="#ffda2d"
      />
      <path d="m291.5 400-36.5 19.902v60.098l42.426 10 45.816-10-9.573-76.574z" fill="#f0b500" />
      <path d="m105 480v30h150l10-15-10-15z" fill="#f0b500" />
      <path d="m255 480h150v30h-150z" fill="#ff9100" />
      <path
        d="m206.194 36.172c-33.646 8.633-64.167 26.035-89.082 50.941-76.02 76.031-76.02 199.742.002 275.774 61.324 61.316 135.469 56.555 137.886 57.015l10-184.902-10-112.553-19-57.447z"
        fill="#005966"
      />
      <path
        d="m392.888 87.113c-2.68-2.045-33.078-36.57-89.074-50.939l-25.472 35.019-23.342 51.254v297.455c49.935 0 99.871-19.006 137.888-57.017 76.019-76.03 76.019-199.74 0-275.772z"
        fill="#003034"
      />
      <path
        d="m255 122.447-14.667-41.281-18.735-17.766c-31.582 6.472-60.25 21.914-83.271 44.926l74.247 74.248.001-.001 42.425-17.573 10-22z"
        fill="#df5e3b"
      />
      <path
        d="m371.673 108.326c-23.019-23.011-51.686-38.453-83.268-44.926l-33.405 59.047v42.553l42.426 17.574 45.574-35.574z"
        fill="#ce3520"
      />
      <path
        d="m371.674 108.326-74.248 74.248 17.574 42.426 43.672 10 61.245-10c0-42.253-16.081-84.506-48.243-116.674z"
        fill="#79c779"
      />
      <path
        d="m315 225-17.574 42.426 26.845 36.845 47.403 37.403.001-.001c32.161-32.167 48.242-74.42 48.242-116.673z"
        fill="#5393fb"
      />
      <path
        d="m138.326 108.326s-.001.001-.002.002c-32.161 32.166-48.241 74.419-48.241 116.672l59.917 10 45-10 17.573-42.426z"
        fill="#98e67a"
      />
      <path
        d="m195 225h-104.917c0 42.253 16.081 84.506 48.243 116.674l50.924-40.924 23.324-33.324z"
        fill="#77b7e9"
      />
      <path
        d="m212.574 267.427-74.248 74.247.001.001c32.166 32.163 74.419 48.244 116.673 48.243l10-61.246-10-43.672z"
        fill="#df5e3b"
      />
      <path
        d="m297.426 267.426-42.426 17.574v104.918c42.253 0 84.506-16.081 116.674-48.244z"
        fill="#ce3520"
      />
      <path
        d="m195 225c0 33.16 26.836 60 60 60l10-56.962-10-63.038c-33.16 0-60 26.836-60 60z"
        fill="#ecf2ff"
      />
      <path d="m255 165v120c33.16 0 60-26.836 60-60 0-33.158-26.836-60-60-60z" fill="#d9e5ff" />
      <path d="m185.729 0 69.271 122.447 10-76.329-10-46.118z" fill="#ffda2d" />
      <path d="m255 0v122.447l69.27-122.447z" fill="#f0b500" />
    </g>
  </svg>
)
