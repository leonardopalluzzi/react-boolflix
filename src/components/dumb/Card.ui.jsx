import ReactFlagsSelect from "react-flags-select";

export default function CardUi({ movie }) {

    //console.log(movie);



    let language = movie.original_language;

    if (language == 'en') {
        language = 'uk'
    }



    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <ul>
                            <li>{movie.title}</li>
                            <li>{movie.original_title}</li>
                            <li><img className="card_img" src={`https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`} alt="language" /></li>
                            <li>{movie.vote_average}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}