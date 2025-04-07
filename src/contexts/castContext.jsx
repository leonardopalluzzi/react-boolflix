import { createContext, useContext, useEffect, useState } from 'react'

const CastContext = createContext();


function CastProvider({ children }) {

    const [casts, setCasts] = useState({
        state: 'laoding'
    })

    const [movieId, setMovieId] = useState(0)
    const [serieId, setSerieId] = useState(11393)
    console.log(movieId);


    const movieCastEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=36f8def474a69281774f96a879460e82`

    const serieCastEndpoint = `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=36f8def474a69281774f96a879460e82`

    function handleCastsFetch() {

        Promise.all([
            fetch(movieCastEndpoint).then(res => res.json()),
            fetch(serieCastEndpoint).then(res => res.json()),
        ])
            .then(([movieCast, serieCast]) => {
                const movie = movieCast.cast
                const serie = serieCast.cast

                if (movieCast.cast.length === 0 && serieCast.cast.length === 0) {
                    setCasts({
                        state: 'empty',
                        movieCast: [],
                        serieCast: []
                    })
                } else {
                    setCasts({
                        state: 'success',
                        movieCast: movie,
                        serieCast: serie
                    })
                }

                console.log(casts);

            })
            .catch(err => {
                console.error(err)
                setCasts({
                    state: 'error',
                    message: err.message
                })
            })

    }

    return (
        <>
            <CastContext.Provider value={{ setMovieId, setSerieId, casts, handleCastsFetch }}>
                {children}
            </CastContext.Provider>
        </>
    )
}

function useCastContext() {
    const context = useContext(CastContext)
    return context
}

export { CastProvider, useCastContext }