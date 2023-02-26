import {FC} from 'react'
import { TUser } from './Person.types'

export const Person: FC<TUser> = ({name}) => {
  return (
    <div>
        <h1>Person</h1>
        <span>{name.firstName} {name.lastName}</span>
    </div>
  )
}