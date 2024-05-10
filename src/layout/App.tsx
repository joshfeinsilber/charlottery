import { Keyboard } from '../components/keyboard/Keyboard'
import { Header } from './header/App'

const Layout = () => {
  return (
    <div className="h-svh w-svw bg-slate-100 text-slate-900">
      <Header />
      <main className="flex h-full flex-col items-center justify-center">
        <Keyboard />
      </main>
    </div>
  )
}

export default Layout
