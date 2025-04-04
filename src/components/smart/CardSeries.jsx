import CardSerieUi from "../dumb/CardSerie.ui";

export default function CardSeries({ serie }) {
    const imgPath = 'https://image.tmdb.org/t/p/w185'


    let language = serie.original_language;
    let rating = Math.ceil(serie.vote_average / 2)

    if (language == 'en') {
        language = 'uk'
    }
    return (
        <>
            <CardSerieUi rating={rating} language={language} serie={serie} imgPath={imgPath} />
        </>
    )
}