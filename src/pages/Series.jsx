import JumboSeries from "../components/smart/JumboSeries"
import AllSeriesList from "../components/smart/AllSeriesList"
import { AllSeriesProvider } from "../contexts/allSeriesContext"
import SeriesList from '../components/smart/SeriesList'

export default function Series() {
    return (
        <>
            <AllSeriesProvider>
                <JumboSeries />
                <SeriesList />
                <AllSeriesList />
            </AllSeriesProvider>
        </>
    )
}