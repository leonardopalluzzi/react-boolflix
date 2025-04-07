import { useCastContext } from "../../contexts/castContext"
import MovieCast from "../smart/MovieCast";

export default function CardUi({ movie, imgPath, language, rating, hover, setHover }) {

    const { setMovieId, handleCastsFetch } = useCastContext()

    return (
        <>
            <div className="container position-relative">
                <div onMouseEnter={() => { setHover(true); setMovieId(movie.id) }} onMouseLeave={() => { setHover(false); setMovieId(0) }} className={`movie_card`}>
                    <div className={`card-header border border-0 p-0`}>
                        <img src={`${imgPath}${movie.poster_path}`} alt="" />
                    </div>
                    <div className={`movie_card_body ${hover == false ? 'd-none' : ''}`}>
                        <ul>
                            <li>
                                <h6>Title: </h6>
                                <span>{movie.title}</span>
                            </li>
                            <li>
                                <h6>Original Title: </h6>
                                <span>{movie.original_title}</span>
                            </li>
                            <li>
                                <h6>Language: </h6>
                                <span><img className="card_img" src={`https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`} alt="language" /></span>

                            </li>
                            <li className="d-flex">
                                <h6>Rating:</h6>
                                <span className="mx-2">
                                    {rating == 0 ? 'No rating' : Array.from(Array(rating), (el, i) => <i key={i} className="bi bi-star-fill text-warning"></i>)}
                                </span>
                            </li>
                            <li>
                                <h6>Overview: </h6>
                                <span>{movie.overview ? movie.overview : 'No Data'}</span>
                            </li>
                            <li><MovieCast /></li>
                        </ul>
                    </div>
                </div>


            </div >
        </>
    )
}