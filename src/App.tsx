import { Keyboard } from './components/keyboard/Keyboard'
import Layout from './layout/App'

function App() {
  return <Layout />

  return (
    <div className="flex h-[100svh] w-[100svw] flex-col items-center justify-center bg-slate-100">
      <h1 className="text-2xl">Count: {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
      <Keyboard />
    </div>
  )
}

export default App
