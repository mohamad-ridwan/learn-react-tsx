import {useContext} from 'react'
import { UserContext } from './UserContext'

export const User = ()=> {
  const userContext = useContext(UserContext)
    const handleLogin = ()=>{
      userContext.setUser({
        name: 'ridwan',
        email: 'ridwan@gmail.com'
      })
    }
    const handleLogout = ()=>{
      userContext.setUser(null)
    }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <span>User name is {userContext.user?.name}</span>
    <span>User email is {userContext.user?.email}</span>
    </>
  )
}