import { FC } from 'react'

type Props = {
    children: string
    title: string
    totalUserOn?: number
}

export const Heading: FC<Props> = ({ children, title, totalUserOn = 0 }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{children}</h2>
            <span>{totalUserOn}</span>
        </>
    )
}