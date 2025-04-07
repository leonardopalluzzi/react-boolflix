import { useEffect, useState } from "react"

export default function useSeriesCast({ id }) {

    const [casts, setCasts] = useState({
        state: 'laoding'
    })

    const serieId = id

    const serieCastEndpoint = `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=36f8def474a69281774f96a879460e82`


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