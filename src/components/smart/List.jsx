import { useMovieContext } from "../../contexts/movieContext"
import { useRef } from 'react'
import ListUi from "../dumb/List.ui"

export default function List() {

    const scrollRef = useRef();

    console.log(scrollRef);


    const { state } = useMovieContext()
    console.log(state);

    function scroll(direction) {
        const { current } = scrollRef;
        const scrollAmount = 300;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }

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
                        scroll={scroll}
                        scrollRef={scrollRef}
                        movies={state.moviesData}
                        series={state.tvData}
                    />
                </>
            )
    }
}