import { useState } from 'react'
import CardUi from "../dumb/Card.ui"

export default function Card({ movie }) {

    const [hover, setHover] = useState(true)

    const imgPath = 'https://image.tmdb.org/t/p/w342'

    let language = movie.original_language;
    let rating = Math.ceil(movie.vote_average / 2)

    if (language == 'en') {
        language = 'uk'
    }
    return (
        <>
            <CardUi
                hover={hover}
                setHover={setHover}
                rating={rating}
                language={language}
                movie={movie}
                imgPath={imgPath}
            />
        </>
    )
}