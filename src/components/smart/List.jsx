import { useEffect } from "react"
import { useMovieContext } from "../../contexts/movieContext"
import ListUi from "../dumb/List.ui"

export default function List() {

    const { state } = useMovieContext()
    console.log(state);

    useEffect(() => {

    })

    switch (state.state) {
        case 'loading':
            return (
                <>
                    <h1>cerca un film</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>error</h1>
                </>
            )
        case 'empty':
            return (
                <>
                    <h1>no results found</h1>
                </>
            )
        case 'success':
            return (
                <>
                    <ListUi
                        movies={state.moviesData}
                        series={state.tvData}
                    />
                </>
            )
    }
}