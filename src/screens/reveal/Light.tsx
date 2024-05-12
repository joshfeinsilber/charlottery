import classNames from 'classnames'

export const Light = (props: { enabled: boolean }) => {
  return (
    <div
      className={classNames(
        'h-[40px] w-[40px] rounded-full transition-all delay-200 duration-500',
        {
          'bg-green-700': props.enabled,
          'bg-gray-900': !props.enabled
        }
      )}
    />
  )
}
