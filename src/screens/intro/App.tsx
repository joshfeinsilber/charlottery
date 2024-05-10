import { Logo } from '../../layout/header/Logo'

export const Intro = () => (
  <div className="flex flex-col items-center text-center">
    <h2 className="text-5xl">
      <Logo />
    </h2>
    <p className="mt-4 text-xl italic">Build words with every letter in a shuffled alphabet.</p>
    <button className="btn btn-secondary btn-block mt-7">How To Play</button>
    <button className="btn btn-primary btn-lg btn-block mt-2">Play</button>

    <p className="mt-8 text-xs font-bold">May 10, 2024</p>
    <p className="text-xs">No. 2</p>
    <p className="text-xs">"Milo's Frog Toy"</p>
  </div>
)
