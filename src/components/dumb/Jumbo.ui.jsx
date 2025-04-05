export default function JumboUi({ popular, imgPath, index }) {
    return (
        <>
            <div className="jumbo">
                <div className="h-100 position-relative">
                    <img className="img_jumbo_big" src={imgPath + popular.moviesPopular[index].poster_path} alt="" />
                    <div className="container h-100 position-relative">
                        <div className="jumbo_content">
                            <div className="title">
                                <img src="placeholder.png" alt="" />
                                <h3>{popular.moviesPopular[index].original_title}</h3>
                            </div>
                            <div className="content">
                                <p>{popular.moviesPopular[index].overview}</p>
                            </div>
                            <div className="operations">
                                <button className="btn btn-light mx-4">Guarda ora</button>
                                <button className="btn btn-secondary">Episodi</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}