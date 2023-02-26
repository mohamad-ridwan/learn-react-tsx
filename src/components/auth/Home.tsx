import { TAuthProps } from "./Auth.types"

export const Home = ({isLoggedIn, email}: TAuthProps)=> {
  return (
    <div>
        <h4>HOME</h4>
        <span>{isLoggedIn && `welcome user from ${email}`}</span>
        <span>{email}</span>
    </div>
  )
}