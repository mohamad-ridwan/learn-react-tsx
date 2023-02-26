import {ComponentProps} from 'react'

type TCustomButtonProps = {
    friends: 'add-friends' | 'cancel' | 'delete-friends'
    children: string
} & Omit<ComponentProps<'button'>, 'children'>

export const CustomButton = ({friends, children, ...res}: TCustomButtonProps)=> {
  return (
    <button className={`btn-card ${friends}`} {...res}>{children}</button>
  )
}