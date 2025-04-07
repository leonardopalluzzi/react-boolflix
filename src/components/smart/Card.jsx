import { useState } from 'react'
import CardUi from "../dumb/Card.ui"
import MovieCast from './MovieCast'

export default function Card({ movie }) {



    const [hover, setHover] = useState(false)

    const imgPath = 'https://image.tmdb.org/t/p/w342'

    let language = movie.original_language;
    let rating = Math.ceil(movie.vote_average / 2)

    if (language == 'en') {
        language = 'uk'
    }
    return (
        <>
            <CardUi
                castComponent={<MovieCast moveId={movie.id} />}
                hover={hover}
                setHover={setHover}
                rating={rating}
                language={language}
                imgPath={imgPath}
                title={movie.title}
                overview={movie.overview}
                originalName={movie.original_title}
                posterPath={movie.poster_path}
            />
        </>
    )
}