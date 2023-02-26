import {FC, MouseEvent} from 'react'

type Props = {
    click: (event: MouseEvent<HTMLButtonElement>, name: string)=> void
}

export const Button: FC<Props> = ({click})=> {
  return <button onClick={(e)=>click(e, 'ridwan')}>click me</button>
}