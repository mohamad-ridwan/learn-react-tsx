import { FC, ComponentType } from 'react'
import { TAuthProps } from './Auth.types'
import { Login } from './Login'

type TPrivateProps = {
    isLoggedIn: boolean
    component: ComponentType<TAuthProps>
}

export const Private = ({ isLoggedIn, component: Component }: TPrivateProps) => {
    if (isLoggedIn) {
        return <Component username='ridwan' email='wawan@gmail.com' isLoggedIn={true} age={22} token={7653}/>
    } else {
        return <Login />
    }
}