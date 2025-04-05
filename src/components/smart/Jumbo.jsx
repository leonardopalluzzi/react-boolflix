import JumboUi from "../dumb/Jumbo.ui";
import { useMovieContext } from "../../contexts/movieContext";

export default function Jumbo() {

    const { popular } = useMovieContext()
    console.log(popular);

    const imgPath = 'https://image.tmdb.org/t/p/w500'

    switch (popular.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>error</h1>
                    <p>{popular.state.message}</p>
                </>
            )
        case 'success':
            return (
                <>
                    <JumboUi imgPath={imgPath} popular={popular} />
                </>
            )
    }
}