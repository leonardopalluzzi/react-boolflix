import JumboUi from "../dumb/Jumbo.ui";
import { useMovieContext } from "../../contexts/movieContext";
import { useState, useEffect } from 'react'

export default function Jumbo() {

    const { popular } = useMovieContext()

    
    
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const arr = popular.moviesPopular
        if(index > arr.length){
            setIndex(0);
        }
        setIndex(index + 1)
    }, 3000)

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
                    <JumboUi index={index} imgPath={imgPath} popular={popular} />
                </>
            )
    }
}