import { TAuthProps } from "./Auth.types"

export const Profile = ({username, age}: TAuthProps)=> {
    return (
      <div>
        Private Profile component
        <span>username: {username}</span>
        <small>my age : {age}</small>
      </div>
    )
  }