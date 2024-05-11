import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="sticky top-0 flex w-full items-center justify-between border-b-2 bg-slate-100 p-4 py-2">
      <h2 className="ml-3 text-xl">
        <Logo />
      </h2>
      <div className="tooltip tooltip-left" data-tip="How To Play">
        <button className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
