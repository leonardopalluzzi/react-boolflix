export default function CardSerieUi({ rating, serie, imgPath, language }) {
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
                            <li>{rating == 0 ? 'No rating' : Array.from(Array(rating), (el, i) => <i key={i} className="bi bi-star-fill text-warning"></i>)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}