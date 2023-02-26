import {createContext, useState, ReactNode, Dispatch, SetStateAction} from 'react'

export type TStateMovieListContext = {
    id: number
    titleMovie: string
    dateRelease: string
    rate: number
}

type TDefaultStateMovieListContext = {
    movieList: TStateMovieListContext[],
    setMovieList: Dispatch<SetStateAction<TStateMovieListContext[]>>
}

type TMovieListContextProps = {
    children: ReactNode
}

export const ContextMovieList = createContext({} as TDefaultStateMovieListContext)

export const ContextMovieListProvider = ({children}: TMovieListContextProps)=>{
    const [movieList, setMovieList] = useState<TStateMovieListContext[]>([
        {
            id: 0,
            titleMovie: '',
            dateRelease: '',
            rate: 0
        }
    ])

    return <ContextMovieList.Provider value={{movieList, setMovieList}}>
        {children}
    </ContextMovieList.Provider>
}