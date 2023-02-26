import { FC } from 'react'
import { TName } from './Person.types'

type Props = {
    user: TName[]
}

export const PersonList: FC<Props> = ({ user }) => {
    return (
        <div>
            PersonList
            {user.map((el: TName, key: number)=>(
                <span key={key}>{el.firstName} {el.lastName}</span>
            ))}
        </div>
    )
}