import JumboUi from "../dumb/Jumbo.ui";
import { useMovieContext } from "../../contexts/movieContext";
import { useState, useEffect } from 'react'

export default function Jumbo() {

    const { popular } = useMovieContext()

    const [index, setIndex] = useState(0)

    useEffect(() => {
        console.log(popular.state);

        //check if state is success, if array is existing and if it is empty
        if (popular.state !== 'success' || !popular.moviesPopular || popular.moviesPopular.length == 0) {
            return;
        }

        //set intervalevery 3 seconds
        const interval = setInterval(() => {

            //increment the index state of 1 and with module operator, reset if if it is bigger then array length
            setIndex((prevIndex) => (prevIndex + 1) % popular.moviesPopular.length);
        }, 3000)

        //clear the interval on component unmount
        return () => clearInterval(interval)

    }, [popular])

    const imgPath = 'https://image.tmdb.org/t/p/w1280'

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
                    <JumboUi movie={popular.moviesPopular[index]} imgPath={imgPath} />
                </>
            )
    }
}