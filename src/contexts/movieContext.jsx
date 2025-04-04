import { createContext, useContext, useState, useEffect } from 'react';

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;



const MovieContext = createContext();

function MovieProvider({ children }) {

    //states
    const [state, setState] = useState({
        state: 'loading'
    })

    const [movies, setMovies] = useState([])

    const [searchText, setSearchText] = useState('')
    console.log(searchText);
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`


    //hooks
    // useEffect(() => {
    //     handleFetch()
    // }, [])


    //functions
    function handleFetch() {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
                setState({
                    state: 'success',
                    page: movies.page,
                    movies: [
                        ...movies.results
                    ]
                })
            })
    }

    return (
        <>
            <MovieContext.Provider value={{ state, setState, handleFetch, searchText, setSearchText }}>
                {children}
            </MovieContext.Provider>
        </>
    )

}

function useMovieContext() {
    const context = useContext(MovieContext)
    return context
}

export { MovieProvider, useMovieContext }