// import { Intro } from '../screens/intro/App'
import { Reveal } from '../screens/reveal/App'
import { Header } from './header/App'

const Layout = () => {
  return (
    <div className="min-w-svw flex min-h-svh flex-col bg-slate-100 text-slate-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-12">
        <Reveal />
      </main>
    </div>
  )
}

export default Layout
