import {FC, ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export const Oscar: FC<Props> = ({children})=> {
  return (
    <div>
        {children}
    </div>
  )
}