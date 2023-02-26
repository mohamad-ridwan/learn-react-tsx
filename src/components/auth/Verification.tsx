import { TAuthProps } from "./Auth.types"

export const Verification = ({token}: TAuthProps)=> {
  return (
    <div>
        <h1>please Verification your account</h1>
        <span>token : {token}</span>
    </div>
  )
}