import { useState } from 'react'
import CardUi from '../dumb/Card.ui';
import SerieCast from './SerieCast';

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
            <CardUi
                castComponent={<SerieCast serieId={serie.id} />}
                hover={hover}
                setHover={setHover}
                rating={rating}
                language={language}
                imgPath={imgPath}
                title={serie.name}
                overview={serie.overview}
                originalName={serie.original_name}
                posterPath={serie.poster_path}
            />
        </>
    )
}