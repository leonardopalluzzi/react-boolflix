import { useEffect, useState } from "react"
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function useMovieCast({ id }) {

    const [casts, setCasts] = useState({
        state: 'laoding'
    })

    const movieId = id

    const movieCastEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`


    useEffect(() => {
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
    }, [])

    return { castState: casts }
}