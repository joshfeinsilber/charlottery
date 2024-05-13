import classNames from 'classnames'
import * as React from 'react'
import styled from 'styled-components'

type Props = React.PropsWithChildren<{
  size: number
  submit?: boolean
  color?: {
    bg?: string
    activeBg?: string
    text?: string
  }
  onClick?: () => void
}>

export const Key = (props: Props) => {
  return (
    <Container
      className={classNames(
        `transition-75 flex h-14 cursor-pointer items-center justify-center rounded font-semibold uppercase transition-all`,
        {
          'text-black': !props.submit,
          'bg-slate-300': !props.submit,
          'active:bg-slate-400': !props.submit,

          'text-white': props.submit,
          'bg-green-600': props.submit,
          'active:bg-green-700': props.submit
        }
      )}
      style={{ flex: props.size }}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  )
}

const Container = styled.button.attrs({})``
