import classNames from 'classnames'
import * as React from 'react'
import styled from 'styled-components'

type Props = React.PropsWithChildren<{
  size: number
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
        `transition-75 flex h-14 cursor-pointer items-center justify-center rounded  font-semibold uppercase  transition-all `,
        {
          [`bg-${props.color?.bg}`]: props.color?.bg,
          [`active:bg-${props.color?.activeBg}`]: props.color?.activeBg,
          [`text-${props.color?.text}`]: props.color?.text,
          [`text-black`]: !props.color?.text,
          [`bg-slate-300`]: !props.color?.bg,
          [`active:bg-slate-400`]: !props.color?.activeBg
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
