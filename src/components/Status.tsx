import React, {FC} from 'react'

// status is union type
type Props = {
    status: 'loading' | 'sukses' | 'error'
}

export const Status: FC<Props> = ({status})=> {
    let message: string = ''
    if(status === 'loading'){
        message = 'loading'
    }else if(status === 'sukses'){
        message = 'sukses ambil data'
    }else if(status === 'error'){
        message = 'error ambil data'
    }
  return (
    <div>
        <h1>message of get data</h1>
        <span>{message}</span>
    </div>
  )
}