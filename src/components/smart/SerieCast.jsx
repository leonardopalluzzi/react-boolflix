import useSeriesCast from '../../hooks/useSeriesCast';
import CastUi from '../dumb/Cast.ui'

export default function SerieCast({ serieId }) {

    const { castState } = useSeriesCast({ id: serieId })

    function renderSeriesCast() {
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
            {renderSeriesCast()}
        </>
    )





}