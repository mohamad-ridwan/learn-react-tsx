import {ReactNode, createContext, FC, useState, Dispatch, SetStateAction} from 'react'

export type AuthUser = {
    name: string
    email: string
}

type TUserContextState = {
    user: AuthUser | null
    setUser: Dispatch<SetStateAction<AuthUser | null>>
}

type UserContextProps = {
    children: ReactNode
}

export const UserContext = createContext({} as TUserContextState)

export const UserContextProvider: FC<UserContextProps> = ({children})=>{
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}