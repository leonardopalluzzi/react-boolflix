import CardSeries from "../smart/CardSeries"
import Carousel from "./Carousel.ui"

export default function AllSeriesListUi({ allSeries }) {
    console.log(allSeries);

    return (
        <>
            <Carousel title={'Popular Series'} content={<>{
                allSeries.seriesData.map(item => (
                    <CardSeries serie={item} />
                ))}</>} />
        </>
    )
}