import { createContext, useContext, useEffect, useState } from 'react'

const CastContext = createContext();


function CastProvider({ children }) {

    const [casts, setCasts] = useState({
        state: 'laoding'
    })

    const [movieId, setMovieId] = useState(0)
    const [serieId, setSerieId] = useState(0)

    console.log(serieId);
    console.log(movieId);



    const movieCastEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=36f8def474a69281774f96a879460e82`

    const serieCastEndpoint = `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=36f8def474a69281774f96a879460e82`

    function handleCastsFetch() {

        if (serieId == 0 && movieId == 0) {
            setCasts({
                state: 'loading'
            })
        } else if (serieId == 0 && movieId != 0) {
            fetch(movieCastEndpoint)
                .then(res => res.json())
                .then(data => {
                    const movie = data.cast

                    if (data.cast.length === 0) {
                        setCasts({
                            state: 'empty',
                            cast: [],
                        })
                    } else {
                        setCasts({
                            state: 'success',
                            cast: movie,
                        })
                    }
                })
                .catch(err => {
                    console.error(err)
                    setCasts({
                        state: 'error',
                        message: err.message
                    })
                })
        } else if (movieId == 0 && serieId != 0) {
            fetch(serieCastEndpoint)
                .then(res => res.json())
                .then(data => {
                    const serie = data.cast

                    if (data.cast.length === 0) {
                        setCasts({
                            state: 'empty',
                            cast: []
                        })
                    } else {
                        setCasts({
                            state: 'success',
                            cast: serie
                        })
                    }
                })
                .catch(err => {
                    console.error(err)
                    setCasts({
                        state: 'error',
                        message: err.message
                    })
                })
        }
    }

    useEffect(() => {
        if (movieId !== 0 || serieId !== 0) {
            handleCastsFetch()
        }
    }, [movieId, serieId])

    // Promise.all([
    //     fetch(movieCastEndpoint).then(res => res.json()),
    //     fetch(serieCastEndpoint).then(res => res.json()),
    // ])
    //     .then(([movieCast, serieCast]) => {
    //         const movie = movieCast.cast
    //         const serie = serieCast.cast

    //         if (movieCast.cast.length === 0 && serieCast.cast.length === 0) {
    //             setCasts({
    //                 state: 'empty',
    //                 movieCast: [],
    //                 serieCast: []
    //             })
    //         } else {
    //             setCasts({
    //                 state: 'success',
    //                 movieCast: movie,
    //                 serieCast: serie
    //             })
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err)
    //         setCasts({
    //             state: 'error',
    //             message: err.message
    //         })
    //     })



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