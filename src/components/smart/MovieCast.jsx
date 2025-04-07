import useMovieCast from "../../hooks/useMovieCast"
import CastUi from '../dumb/Cast.ui'

export default function MovieCast({ moveId }) {

    const { castState } = useMovieCast({ id: moveId })

    function renderCastComponent() {
        switch (castState.state) {
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
                        <span>{castState.message}</span>
                    </>
                )
            case 'success':
                return (
                    <>
                        <CastUi
                            cast={castState.cast}
                        />
                    </>
                )
        }
    }
    return (
        <>
            {renderCastComponent()}
        </>
    )
}