import { createContext, useContext, useState, useEffect } from 'react';

const api_key = import.meta.env.MOVIE_DB_API_KEY;
const endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}'

const MovieContext = createContext();

function MovieProvider({ children }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        handleFetch()
    })

    function handleFetch() {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            })
    }

    return (
        <>
            <MovieContext.Provider value={{ movies, setMovies, handleFetch }}>
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