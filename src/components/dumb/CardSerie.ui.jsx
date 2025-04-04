import ReactFlagsSelect from "react-flags-select";

export default function CardSerieUi({ serie }) {

    //console.log(movie);

    const imgPath = 'https://image.tmdb.org/t/p/w185'


    let language = serie.original_language;

    if (language == 'en') {
        language = 'uk'
    }



    return (
        <>
            <div className="container">
                <div className="card w-50 m-auto">
                    <div className="card-header text-center">
                        <img src={`${imgPath}${serie.poster_path}`} alt="" />
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>{serie.name}</li>
                            <li>{serie.original_name}</li>
                            <li><img className="card_img" src={`https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`} alt="language" /></li>
                            <li>{Math.round(serie.vote_average / 2)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}