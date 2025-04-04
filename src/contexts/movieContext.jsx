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
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`


    // //hooks
    // useEffect(() => {
    //     handleFetch()
    // }, [])


    //functions
    function handleFetch() {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.results && data.results.length > 0) {
                    console.log(data.results); //vuoto
                    setState({
                        state: 'success',
                        page: data.page,
                        moviesData: [
                            ...data.results
                        ]
                    })
                } else {
                    setState({
                        state: 'empty',
                        moviesData: []
                    })
                }
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