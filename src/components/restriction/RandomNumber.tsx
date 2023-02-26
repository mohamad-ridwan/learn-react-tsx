type TValueRandomNumberProps = {
  value: number
}

type TPositiveRandomNumberProps = TValueRandomNumberProps & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type TNegativeRandomNumberProps = TValueRandomNumberProps & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type TZeroRandomNumberProps = TValueRandomNumberProps & {
  isZero: boolean
  isNegative?: never
  isPositive?: never
}

type TRandomNumberProps = TPositiveRandomNumberProps | TNegativeRandomNumberProps | TZeroRandomNumberProps

export const RandomNumber = ({value, isPositive, isNegative, isZero}: TRandomNumberProps)=> {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}