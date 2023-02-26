import {FC, createContext, ReactNode} from 'react'
import { theme } from './theme'

type TThemeContextProps = {
    children: ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider: FC<TThemeContextProps> = ({children})=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}