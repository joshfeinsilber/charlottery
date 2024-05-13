// import { Intro } from '../screens/intro/App'
// import { Reveal } from '../screens/reveal/App'
import { Game } from '../screens/game/App'
import { Header } from './header/App'

const Layout = () => {
  return (
    <div className="min-w-svw flex min-h-svh select-none flex-col overflow-hidden bg-slate-100 text-slate-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-12">
        <Game />
      </main>
    </div>
  )
}

export default Layout
