import * as React from 'react'
import styled from 'styled-components'

type Props = React.PropsWithChildren<{
  size: number
}>

export const Key = (props: Props) => {
  return <Container style={{ flex: props.size }}>{props.children}</Container>
}

const Container = styled.div.attrs({
  className: `bg-gray-200 hover:bg-gray-300 dark:bg-zinc-400 dark:text-white dark:hover:bg-zinc-500 h-12`
})``
