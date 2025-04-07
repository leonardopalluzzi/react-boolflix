import JumboUi from "../dumb/Jumbo.ui";
import { useState, useEffect } from 'react'
import { useAllSeriesContext } from "../../contexts/allSeriesContext";

export default function Jumbo() {

    const { allSeries } = useAllSeriesContext()
    console.log(allSeries);


    const [index, setIndex] = useState(0)

    useEffect(() => {

        //check if state is success, if array is existing and if it is empty
        if (allSeries.state !== 'success' || !allSeries.seriesData || allSeries.seriesData.length == 0) {
            return;
        }

        //set intervall every 3 seconds
        const interval = setInterval(() => {

            //increment the index state of 1 and with module operator, reset if if it is bigger then array length
            setIndex((prevIndex) => (prevIndex + 1) % allSeries.seriesData.length);
        }, 4000)

        //clear the interval on component unmount
        return () => clearInterval(interval)

    }, [allSeries])

    const imgPath = 'https://image.tmdb.org/t/p/w1280'

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
                    <h1>error</h1>
                    <p>{allSeries.message}</p>
                </>
            )
        case 'success':
            return (
                <>
                    <JumboUi
                        title={allSeries.seriesData[index].name}
                        overview={allSeries.seriesData[index].overview}
                        poster={allSeries.seriesData[index].poster_path}
                        imgPath={imgPath} />
                </>
            )
    }
}