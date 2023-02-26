type THorizontalPositionProps = 'top' | 'center' | 'bottom'

type TVerticalPositionProps = 'left' | 'center' | 'right'

type TToastProps = {
    position: Exclude<`${THorizontalPositionProps}-${TVerticalPositionProps}`, 'center-center' | 'top-center' | 'top-left' | 'top-right'> | 'center' | number
}

export const Toast = ({position}: TToastProps)=> {
  return (
    <div>The position is "{position}"</div>
  )
}