import {useState} from 'react'

type TUser = {
    name: string
    email: string
}

export const User = ()=> {
    // type assertion
    const [user, setUser] = useState<TUser>({} as TUser)

    const handleLogin = ()=>{
        setUser({
            name: 'ridwan',
            email: 'ridwan@gmail.com'
        })
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <span>name user is {user.name}</span>
        <span>email user is {user.email}</span>
    </div>
  )
}