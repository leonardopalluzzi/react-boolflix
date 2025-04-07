import { useState } from 'react'
import CardSerieUi from "../dumb/CardSerie.ui";

export default function CardSeries({ serie }) {

    const [hover, setHover] = useState(false)

    const imgPath = 'https://image.tmdb.org/t/p/w342'


    let language = serie.original_language;
    let rating = Math.ceil(serie.vote_average / 2)

    if (language == 'en') {
        language = 'uk'
    }
    return (
        <>
            <CardSerieUi
                hover={hover}
                setHover={setHover}
                rating={rating}
                language={language}
                movie={serie}
                imgPath={imgPath}
            />
        </>
    )
}