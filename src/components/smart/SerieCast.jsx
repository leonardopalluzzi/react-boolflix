import { useCastContext } from "../../contexts/castContext"
import SerieCastUi from '../dumb/SerieCast.ui'

export default function SerieCast() {
    const { casts } = useCastContext()
    console.log(casts);


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
                    <SerieCastUi
                        cast={casts.cast}
                    />
                </>
            )
    }
}