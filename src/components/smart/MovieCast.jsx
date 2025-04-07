import MovieCastUi from "../dumb/MovieCast.ui"
import { useCastContext } from "../../contexts/castContext"

export default function MovieCast() {

    const { casts } = useCastContext();

    switch (casts.state) {
        case 'empty':
            return (
                <>
                    <span>No info</span>
                </>
            )
        case 'loading':
            return (
                <>
                    <span>Loading...</span>
                </>
            )
        case 'error':
            return (
                <>
                    <span>error: </span>
                    <span>{casts.message}</span>
                </>
            )
        case 'success':
            return (
                <>
                    <MovieCastUi
                        cast={casts.movieCast}
                    />
                </>
            )
    }
}