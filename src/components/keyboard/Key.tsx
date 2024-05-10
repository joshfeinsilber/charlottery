import * as React from 'react'
import styled from 'styled-components'

type Props = React.PropsWithChildren<{
  size: number
}>

export const Key = (props: Props) => {
  return (
    <Container
      className="transition-75 flex h-14 cursor-pointer items-center justify-center rounded bg-slate-300 font-semibold uppercase text-black transition-all hover:bg-slate-400"
      style={{ flex: props.size }}
    >
      {props.children}
    </Container>
  )
}

const Container = styled.button.attrs({})``
