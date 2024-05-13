import { useAtomValue } from 'jotai'
import { Game } from '../screens/game/App'
import { Header } from './header/App'
import { screen as screenAtom, Screen } from '../store/screen'
import { Intro } from '../screens/intro/App'
import { Reveal } from '../screens/reveal/App'
import { Results } from '../screens/results/App'
import { Tutorial } from '../components/Tutorial'

const Layout = () => {
  const screen = useAtomValue(screenAtom)

  const getContent = () => {
    switch (screen) {
      case Screen.intro:
        return <Intro />
      case Screen.reveal:
        return <Reveal />
      case Screen.game:
        return <Game />
      case Screen.results:
        return <Results />
      default:
        return <Intro />
    }
  }

  return (
    <div className="min-w-svw flex min-h-svh select-none flex-col overflow-hidden bg-slate-100 text-slate-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4 pt-12 sm:p-12">
        {getContent()}
        <Tutorial />
      </main>
    </div>
  )
}

export default Layout
