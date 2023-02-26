import {FC, CSSProperties} from 'react'

type Props = {
    styles: CSSProperties
}

export const Container: FC<Props>  = ({styles})=> {
  return (
    <div style={styles}>
        text content goes here
    </div>
  )
}