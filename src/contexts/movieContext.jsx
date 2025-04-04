import { createContext, useContext, useState, useEffect } from 'react';

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;



const MovieContext = createContext();

function MovieProvider({ children }) {

    //states
    const [state, setState] = useState({
        state: 'loading'
    })

    const [searchText, setSearchText] = useState('')
    console.log(searchText);
    const endpointMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`
    const endpointTv = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`


    //functions
    function handleFetch() {
        //parallel fetch
        Promise.all([
            fetch(endpointMovie).then(res => res.json()),
            fetch(endpointTv).then(res => res.json())
        ])
            .then(([movieData, tvData]) => {

                const movies = movieData.results || []
                const tv = tvData.results || []

                if (movieData.results.length === 0 && tvData.results.length === 0) {
                    setState({
                        state: 'empty',
                        moviesData: [],
                        tvData: []
                    });
                } else {
                    setState({
                        state: 'success',
                        moviesData: movies,
                        tvData: tv
                    });
                }

                console.log(state);

            })
            .catch(err => {
                console.error(err)
                setState({
                    state: 'error',
                    message: err.message
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