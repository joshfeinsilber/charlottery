import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { Screen, screen } from '../store/screen'

export const ResultWarning = () => {
  const currentScreen = useAtomValue(screen)

  const [open, setOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [hasResults, setHasResults] = useState(false)

  useEffect(() => {
    setHasResults(new URLSearchParams(window.location.search).has('results'))
  }, [])

  useEffect(() => {
    if (hasResults && !hasOpened && currentScreen !== Screen.results) {
      setOpen(true)
      setHasOpened(true)
    }
  }, [currentScreen, hasOpened, hasResults])

  if (!open) {
    return
  }

  return (
    <div role="alert" className="alert alert-warning" style={{ borderRadius: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>You cannot view another player's words until you finish today's puzzle!</span>
      <div>
        <button
          className="btn btn-sm"
          onClick={() => {
            setOpen(false)
          }}
        >
          Got It
        </button>
      </div>
    </div>
  )
}
