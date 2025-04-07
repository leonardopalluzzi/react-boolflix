import { useMovieContext } from "../../contexts/movieContext"
import ListUi from "../dumb/List.ui";
import PopularListUi from "../dumb/PopularList.ui";

export default function List() {

    const { state } = useMovieContext()
    console.log(state);



    switch (state.state) {
        case 'loading':
            return null
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
                    <PopularListUi />
                </>
            )
        case 'success':
            return (
                <>
                    <ListUi
                        movies={[]}
                        series={state.tvData}
                    />
                </>
            )
    }
}