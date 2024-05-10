import { Intro } from '../screens/intro/App'
import { Header } from './header/App'

const Layout = () => {
  return (
    <div className="flex min-h-svh min-w-svw flex-col bg-slate-100 text-slate-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-12">
        <Intro />
      </main>
    </div>
  )
}

export default Layout
