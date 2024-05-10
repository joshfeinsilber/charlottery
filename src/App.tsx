import { useState } from 'react'
import { Keyboard } from './components/keyboard/Keyboard'
// import KeyboardReact, { KeyboardReact as Keyboard } from 'react-simple-keyboard'
// import 'react-simple-keyboard/build/css/index.css'

const layout = {
  default: ['q w e r t y u i o p', 'a s d f g h j k l', '{enter} z x c v b n m {bksp}'],
  shift: [
    '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M &lt; &gt; ? {shift}',
    '.com @ {space}'
  ]
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-base-300">
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
