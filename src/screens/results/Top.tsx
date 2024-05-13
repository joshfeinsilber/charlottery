import { useAtomValue } from 'jotai'
import { GAME_OVER_MESSAGES } from '../../const/messages'
import { getRandomItemFromArray } from '../../util/lottery/seed'
import { motion } from 'framer-motion'
import { words } from '../../store/game'
import { shareResult } from '../../util/results/share'

export const Top = () => {
  const wordsUsed = useAtomValue(words)

  return (
    <div className="card w-full bg-base-100 text-center shadow-xl">
      <div className="card-body flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: 'reverse',
            type: 'easeOut'
          }}
        >
          <Beagle height={90} />
        </motion.div>

        <h2 className="mt-3 text-4xl font-bold">{getRandomItemFromArray(GAME_OVER_MESSAGES)}</h2>
        <p className="text-lg opacity-90">
          You completed today's puzzle in {wordsUsed.length} words.
        </p>
        <button className="btn btn-primary btn-lg btn-block mt-4" onClick={shareResult}>
          Share
        </button>
      </div>
    </div>
  )
}

const Beagle = (props: { height: number }) => (
  <svg
    style={{ height: props.height }}
    id="Layer_1"
    enableBackground="new 0 0 514.376 389.164"
    height="512"
    viewBox="0 0 514.376 389.164"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="m431.729 175.334-12.006-71.972c-.057-.336-.124-.669-.202-1-.558-2.346-6.126-23.518-29.636-44.365-13.473-11.947-30.211-21.412-49.75-28.132-23.647-8.132-51.555-12.256-82.947-12.256s-59.3 4.124-82.947 12.256c-19.539 6.72-36.277 16.185-49.75 28.132-23.51 20.847-29.078 42.019-29.636 44.365-.079.331-.146.665-.202 1l-12.006 71.972c-9.295 8.559-26.572 29.311-21.967 62.308 2.754 19.74 10.939 39.438 24.326 58.549 12.055 17.208 28.376 33.703 47.2 47.699 18.379 13.666 39.196 25.008 60.2 32.802 22.306 8.275 44.102 12.472 64.782 12.472s42.477-4.196 64.782-12.472c21.005-7.794 41.821-19.136 60.2-32.802 18.824-13.996 35.146-30.491 47.2-47.699 13.387-19.11 21.571-38.809 24.326-58.549 4.606-32.997-12.671-53.748-21.967-62.308z"
        fill="#711f02"
      />
      <g>
        <path
          d="m417.851 183.298-12.923-77.468s-17.405-73.221-147.74-73.221-147.74 73.221-147.74 73.221l-12.923 77.468s-25.855 17.41-20.99 52.271c10.043 71.964 104.394 138.594 181.653 138.594s171.61-66.631 181.653-138.594c4.865-34.861-20.99-52.271-20.99-52.271z"
          fill="#cc693f"
        />
        <path
          d="m303.611 189.227c-32.433 5.802-.446-151.194-46.423-151.194s-13.99 156.996-46.423 151.194l-114.583 59.81c7.794 43.505 88.681 113.062 161.006 113.062s153.212-69.557 161.006-113.062z"
          fill="#fff"
        />
      </g>
      <g>
        <path
          d="m330.319 235.952c-9.316 15.397-52.718 26.424-66.502-5.123-.687.012-.368-9.858-1.339-17.758-2.044.082-4.107.093-6.195.014-1.466-.005-2.921-.051-4.37-.116-.988 7.918-.664 17.875-1.354 17.86-13.785 31.547-57.186 20.52-66.502 5.123 0 0-4.429-1.722-1.932 6.695 3.676 7.104 5.048 17.547 24.181 21.775.466.106-16.205 66.672 50.883 66.672 67.085 0 50.418-66.568 50.883-66.672 19.134-4.228 20.505-14.672 24.181-21.775 2.493-8.421-1.934-6.695-1.934-6.695z"
          fill="#711f02"
        />
        <path
          d="m227.118 285.505s-.822 11.85 12.375 17.203c0 0 3.21 13.911 22.474 14.982 15.319.85 25.395-12.141 23.186-23.186-2.322-11.605-14.308-11.365-22.397-10.354l-1.858 10.71s-2.498-9.987-9.453-12.149c-16.275-2.286-24.327 2.794-24.327 2.794z"
          fill="#ff4076"
        />
      </g>
      <g>
        <g>
          <path
            d="m186.175 205.63c.598 6.829-11.596 13.471-27.233 14.835-15.638 1.365-28.797-3.064-29.395-9.888-.595-6.825 11.598-13.468 27.233-14.835 15.639-1.368 28.798 3.059 29.395 9.888z"
            fill="#ff4076"
          />
        </g>
        <g>
          <path
            d="m357.596 195.741c15.635 1.367 27.828 8.01 27.233 14.835-.597 6.824-13.757 11.254-29.395 9.888-15.638-1.364-27.832-8.006-27.233-14.835.597-6.828 13.756-11.255 29.395-9.888z"
            fill="#ff4076"
          />
        </g>
      </g>
      <g>
        <path
          d="m257.833 218.091c24.077-.333 39.736-18.265 37.953-25.165-2.218-8.597-23.798-13.383-38.931-13.171-15.131.21-36.54 4.309-38.318 13.006-1.426 6.982 15.218 25.666 39.296 25.33z"
          fill="#711f02"
        />
        <g fill="#fff">
          <path d="m252.448 185.665c6.532 0 11.827 2.186 11.827 4.884s-5.295 4.883-11.827 4.883-11.827-2.186-11.827-4.883 5.295-4.884 11.827-4.884z" />
          <path d="m269.038 187.785c1.459 0 2.643 1.14 2.643 2.547 0 1.406-1.183 2.547-2.643 2.547-1.459 0-2.643-1.141-2.643-2.547 0-1.408 1.183-2.547 2.643-2.547z" />
        </g>
      </g>
      <g>
        <g fill="#711f02">
          <path d="m322.858 87.924c-17.802-1.029-27.783 14.509-32.003 21.404-2.881 6.997 3.191 9.57 6.793 7.82 9.467-6.997 21.095-20.168 50.215 2.881 5.659 2.47 11.937-1.647 6.997-10.084-7.408-10.291-17.801-21.199-32.002-22.021z" />
          <path d="m159.515 109.944c-4.939 8.437 1.338 12.554 6.997 10.084 29.224-23.049 40.749-9.878 50.215-2.881 3.498 1.75 9.673-.823 6.792-7.82-4.219-6.895-14.303-22.432-32.002-21.404-14.2.823-24.593 11.731-32.002 22.021z" />
        </g>
      </g>
      <path
        d="m285.311 9.869c-4.205-5.855-10.963-9.203-18.553-9.203-.554 0-1.118.018-1.68.052-6.931.428-14.956 4.316-26.022 12.606-6.375 4.776-11.634 9.449-12.277 10.024l16.221 13.577s6.238 21.347 25.485 21.347c9.836 0 14.635-5.645 16.145-14.394.32-1.854.384-3.724.212-5.56 6.173-8.835 6.497-20.031.469-28.449z"
        fill="#711f02"
      />
      <g>
        <path
          d="m236.746 34.559s20.392-18.322 29.254-18.869c3.979-.245 6.064 1.448 7.117 2.913 2.573 3.593 1.807 8.819-1.863 12.71-1.316 1.392-2.877 2.558-4.383 3.498l.339.207c1.627 1.055 3.104 3.624 2.64 6.307-.276 1.595-1.481 4.449-6.467 5.635-13.523 3.415-26.842-12.241-26.637-12.401z"
          fill="#cc693f"
        />
      </g>
      <g>
        <g>
          <path
            d="m514.35 110.348c-.047-3.625-1.405-7.11-3.823-9.811-.724-.809-17.964-20.043-38.617-40.901-38.877-39.262-53.952-48.197-61.91-51.501-12.999-5.398-24.856-8.135-35.24-8.135h-.001c-17.37.001-27.72 7.423-33.344 13.649-6.161 6.821-8.105 13.862-8.433 15.205-1.646 6.75 1.561 13.747 7.747 16.909l13.212 6.752 18.093 130.556c.204 1.473.626 2.907 1.252 4.256.343.738 8.52 18.273 20.168 36.302 18.066 27.965 34.041 41.549 50.273 42.748.55.041 1.109.062 1.665.062 8.298 0 16.849-4.4 25.416-13.078 20.668-20.936 44.473-70.953 43.542-143.013z"
            fill="#711f02"
          />
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="m404.248 21.988c25.204 10.466 95.103 88.553 95.103 88.553 1.165 90.182-38.298 142.076-54.517 140.877-26.158-1.934-57.941-70.407-57.941-70.407l-19.166-138.296-20.171-10.309c0-.001 7.511-30.84 56.692-10.418z"
                      fill="#cc693f"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <path
            d="m.026 110.348c.047-3.625 1.405-7.11 3.823-9.811.724-.809 17.964-20.043 38.617-40.901 38.876-39.262 53.951-48.196 61.909-51.5 13-5.399 24.857-8.136 35.241-8.136h.001c17.37.001 27.72 7.423 33.344 13.649 6.161 6.821 8.105 13.862 8.433 15.205 1.646 6.75-1.561 13.747-7.747 16.909l-13.212 6.752-18.093 130.556c-.204 1.473-.626 2.907-1.252 4.256-.343.738-8.52 18.273-20.168 36.302-18.066 27.965-34.041 41.549-50.273 42.748-.55.041-1.109.062-1.665.062-8.298 0-16.849-4.4-25.416-13.078-20.668-20.936-44.472-70.953-43.542-143.013z"
            fill="#711f02"
          />
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="m110.129 21.988c-25.204 10.466-95.103 88.553-95.103 88.553-1.165 90.182 38.298 142.076 54.517 140.877 26.158-1.934 57.941-70.407 57.941-70.407l19.165-138.297 20.171-10.309s-7.511-30.839-56.691-10.417z"
                      fill="#cc693f"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g fill="#711f02">
        <path d="m208.147 152.853c-3.9-2.4-8.5-3.8-13.4-3.8-4.8 0-9.3 1.3-13.2 3.7-3.8 2.3-7 5.6-9.2 9.6-2 3.6-.6 8.2 3 10.2s8.2.6 10.2-3c.9-1.601 2.2-3 3.8-4s3.4-1.5 5.4-1.5 3.9.6 5.5 1.5c1.6 1 2.9 2.4 3.8 4.1 1.9 3.7 6.5 5.101 10.1 3.2 3.7-1.9 5.1-6.5 3.2-10.1-2.2-4.201-5.4-7.5-9.2-9.9z" />
        <path d="m332.898 152.853c-3.899-2.4-8.5-3.8-13.399-3.8-4.8 0-9.3 1.3-13.2 3.7-3.8 2.3-7 5.6-9.2 9.6-2 3.6-.6 8.2 3 10.2 3.601 2 8.2.6 10.2-3 .9-1.601 2.2-3 3.8-4 1.601-1 3.4-1.5 5.4-1.5s3.899.6 5.5 1.5c1.6 1 2.899 2.4 3.8 4.1 1.9 3.7 6.5 5.101 10.1 3.2 3.7-1.9 5.101-6.5 3.2-10.1-2.201-4.201-5.4-7.5-9.201-9.9z" />
      </g>
    </g>
  </svg>
)