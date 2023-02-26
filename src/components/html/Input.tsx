import {ComponentProps} from 'react'

type TCustomInput = {
    errMsg: string
} & ComponentProps<'input'>

export const CustomInput = ({errMsg, ...res}: TCustomInput) => {
    return <input type="text" className={`input-card ${errMsg}`} {...res}/>
}