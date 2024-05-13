import * as React from 'react'
import styled from 'styled-components'

type Props = React.PropsWithChildren<{
  size: number
  onClick?: () => void
}>

export const Key = (props: Props) => {
  return (
    <Container
      className="transition-75 flex h-14 cursor-pointer items-center justify-center rounded bg-slate-300 font-semibold uppercase text-black transition-all active:bg-slate-400"
      style={{ flex: props.size }}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  )
}

const Container = styled.button.attrs({})``
