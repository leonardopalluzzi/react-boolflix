export default function CardUi({ title, overview, originalName, posterPath, imgPath, language, rating, hover, setHover, castComponent }) {


    function sliceOverview(text) {
        let displayText
        if (text.length > 150) {
            displayText = text.slice(0, 150) + '...'
        } else {
            displayText = text
        }

        return displayText
    }

    function calcStars(rating) {
        const fullStars = []
        const emptyStars = []
        for (let i = 0; i < rating; i++) {
            fullStars.push(<i key={i} className="bi bi-star-fill text-warning"></i>)
        }

        for (let i = 0; i < 5 - rating; i++) {
            emptyStars.push(<i key={`emptyStar-${i}`} className="bi bi-star-fill"></i>)
        }
        let stars = []

        return stars = [...fullStars, ...emptyStars]
    }


    return (
        <>
            <div className="container position-relative">
                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`movie_card`}>
                    <div className={`card-header border border-0 p-0`}>
                        <img src={`${imgPath}${posterPath}`} alt="" />
                    </div>
                    <div className={`movie_card_body ${hover == false ? 'd-none' : ''}`}>
                        <ul>
                            <li>
                                <h6>Title: </h6>
                                <span>{title}</span>
                            </li>
                            <li>
                                <h6>Original Title: </h6>
                                <span>{originalName}</span>
                            </li>
                            <li>
                                <h6>Language: </h6>
                                <span><img className="card_img" src={`https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`} alt="language" /></span>

                            </li>
                            <li className="d-flex">
                                <h6>Rating:</h6>
                                <span className="mx-2">
                                    {rating == 0 ? 'No rating' : calcStars(rating)}
                                </span>
                            </li>
                            <li>
                                <h6>Overview: </h6>
                                <span className="overview">{overview ? sliceOverview(overview) : 'No Data'}</span>
                            </li>
                            <li>{castComponent}</li>
                        </ul>
                    </div>
                </div>


            </div >
        </>
    )
}