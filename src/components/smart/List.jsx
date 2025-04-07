import { useMovieContext } from "../../contexts/movieContext"
import ListUi from "../dumb/List.ui"

export default function List() {

    const { state } = useMovieContext()
    console.log(state);



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
                    <span>{state.message}</span>
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