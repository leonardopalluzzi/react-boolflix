import ReactFlagsSelect from "react-flags-select";

export default function CardUi({ movie }) {

    const imgPath = 'https://image.tmdb.org/t/p/w185'

    let language = movie.original_language;
    let rating = Math.ceil(movie.vote_average / 2)

    if (language == 'en') {
        language = 'uk'
    }

    return (
        <>
            <div className="container">
                <div className="card w-50 m-auto">
                    <div className="card-header text-center">
                        <img src={`${imgPath}${movie.poster_path}`} alt="" />
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>{movie.title}</li>
                            <li>{movie.original_title}</li>
                            <li><img className="card_img" src={`https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`} alt="language" /></li>
                            <li className="d-flex">{rating == 0 ? 'No rating' : Array.from(Array(rating), () => <i class="bi bi-star-fill text-warning"></i>)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}