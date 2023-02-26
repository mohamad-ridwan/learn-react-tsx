import {FC, ChangeEvent} from 'react'

type Props = {
    value: string
    handleChange(event: ChangeEvent<HTMLInputElement>): void
}

export const Input: FC<Props> = ({value, handleChange})=> {
    function CInput(event: ChangeEvent<HTMLInputElement>){
        console.log(event)
    }
  return <input type="text" value={value} placeholder="type something" onChange={handleChange}/>
//   return <input type="text" value={value} placeholder="type something" onChange={CInput}/>
}