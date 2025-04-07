import { useEffect, useState } from "react"
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function useSeriesCast({ id }) {

    const [casts, setCasts] = useState({
        state: 'laoding'
    })

    const serieId = id

    const serieCastEndpoint = `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=${api_key}`


    useEffect(() => {
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
    }, [])


    return { castState: casts }
}