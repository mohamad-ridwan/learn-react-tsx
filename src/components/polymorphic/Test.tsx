import {ReactNode, ElementType, ComponentProps} from 'react'

type TTestOwnProps<E extends ElementType> = {
  color?: 'text-white' | 'text-gray-700'
  children: ReactNode
  asElement?: E
}

type TTestProps<E extends ElementType> = TTestOwnProps<E> & Omit<ComponentProps<E>, keyof TTestOwnProps<E>>

export const Test = <E extends ElementType = 'div'>({color, children, asElement, ...res}: TTestProps<E>)=> {
  const Component = asElement || 'div'
  return (
    <Component className={color} {...res}>
      {children}
    </Component>
  )
}