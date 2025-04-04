import { useState, useEffect } from "react"
import { useMovieContext } from "../../contexts/movieContext"
import ListUi from "../dumb/List.ui"

export default function List() {

    const { state, setState } = useMovieContext()

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
        case 'success':
            return (
                <>
                    <ListUi
                        movies={state.movies} />
                </>
            )
    }
}