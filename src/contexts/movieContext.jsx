import { createContext, useContext, useState, useEffect } from 'react';

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;



const MovieContext = createContext();

function MovieProvider({ children }) {

    //states
    const [movies, setMovies] = useState([])

    const [searchText, setSearchText] = useState('matrix')
    console.log(searchText);
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`


    //hooks
    useEffect(() => {
        handleFetch()
    }, [])


    //functions
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
            <MovieContext.Provider value={{ movies, setMovies, handleFetch, searchText, setSearchText }}>
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