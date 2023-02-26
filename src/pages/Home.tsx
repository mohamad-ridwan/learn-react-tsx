import {useState, useContext, useEffect} from 'react'
import { ContextMovieList, TStateMovieListContext } from '../components/context/MovieList'

export const HomePage = ()=> {
    const [movieData, setMovieData] = useState<TStateMovieListContext[]>([{
        id: 0,
        titleMovie: '',
        dateRelease: '',
        rate: 0
    }])

    const {movieList, setMovieList} = useContext(ContextMovieList)

    const getMovieDataFromAPI = (): void=>{
        setMovieData([
            {
                id: 333,
                titleMovie: 'weak hero class 1',
                dateRelease: '04-04-2020',
                rate: 8.0
            },
            {
                id: 444,
                titleMovie: 'ong bak',
                dateRelease: '01-11-2015',
                rate: 9.0
            },
            {
                id: 858,
                titleMovie: 'iron man',
                dateRelease: '08-22-2014',
                rate: 9.3
            },
        ])
    }

    useEffect(()=>{
        getMovieDataFromAPI()
    }, [])

    const getMovie = (): void=>{
        setMovieList(movieData)
    }
    
  return (
    <div>
        <h1>list data film</h1>
        <button onClick={getMovie}>dapatkan data film</button>
        <ul>
            {movieList.length > 0 && movieList[0].titleMovie && movieList.map((item, index: number)=>(
                <li key={index}>
                    <h3>title: {item.titleMovie}</h3>
                    <span>release: {item.dateRelease}</span>
                    <small>rate: {item.rate}</small>
                </li>
            ))}
        </ul>
    </div>
  )
}