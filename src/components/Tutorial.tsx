import { Letter } from './Letter'

const ExampleQueue = () => {
  return (
    <div className="wrap mt-4 flex gap-2">
      <Letter size={55} letter="C" />
      <Letter size={55} letter="B" />
      <Letter size={55} letter="A" />
    </div>
  )
}

export const Tutorial = () => {
  return (
    <dialog id="tutorial" className="modal">
      <div className="modal-box max-h-[85%] w-11/12 max-w-screen-md p-10" id="tutorial-content">
        <h3 className="text-2xl font-bold">Lottery of letters</h3>
        <p className="mt-1">
          In each puzzle, you'll be given a <b>shuffled</b> list of all 26 letters in the alphabet.
          Here's an example with just A, B, and C.
        </p>
        <ExampleQueue />

        <h3 className="mt-8 text-2xl font-bold">Build words</h3>
        <p className="mt-1">
          Each word begins with the next letter in the queue. Given the queue above, your word would
          need to start with <b>C.</b>
        </p>

        <h3 className="mt-8 text-2xl font-bold">Run through the queue</h3>
        <p className="mt-1">
          Letters are removed from the queue as you use them, but they must follow the order of the
          queue. Given our example queue...
        </p>
        <ExampleQueue />
        <p className="mt-4">
          The word <b>CITY</b> removes the letter <b>C</b> from the queue.
          <br /> <br />
          The word <b>CAB</b> removes <b>C and B</b>, but not <b>A</b> since the A is before B in
          the word, but after B in the queue. <br /> <br />
          The word <b>COBALT</b> removes <b>C, B, and A</b> as the word contains the letters of the
          queue in the same order.
        </p>

        <h3 className="mt-8 text-2xl font-bold">Finish in a few</h3>
        <p className="mt-1">
          The game ends when you've used all the letters in the queue. Try to use as few words as
          possible to finish the puzzle!
        </p>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
