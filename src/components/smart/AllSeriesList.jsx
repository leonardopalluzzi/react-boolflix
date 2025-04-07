import { useAllSeriesContext } from "../../contexts/allSeriesContext";
import AllSeriesListUi from "../dumb/AllSeriesList.ui"

export default function AllSeriesList() {

    const { allSeries } = useAllSeriesContext()
    console.log(allSeries);

    if (!allSeries) {
        return <h1>Loading...</h1>; // Mostra un messaggio di caricamento se `allSeries` è undefined
    }


    switch (allSeries.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>There Was an error loading the page:</h1>
                    <span>{allSeries.message}</span>
                </>
            )
        case 'success':
            return (
                <>
                    <AllSeriesListUi allSeries={allSeries} />
                </>
            )
    }


}