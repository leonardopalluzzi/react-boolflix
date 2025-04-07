export default function JumboUi({ imgPath, movie }) {
    return (
        <>
            <div className="jumbo">
                <div className="h-100 position-relative">
                    <img className="img_jumbo_big" src={imgPath + movie.poster_path} alt="" />
                    <div className="h-100 position-relative">
                        <div className="jumbo_bg">
                            <div className="container-fluid jumbo_content">
                                <div className="title">
                                    <img src="placeholder.png" alt="" />
                                    <h3>{movie.original_title}</h3>
                                </div>
                                <div className="content">
                                    <p>{movie.overview}</p>
                                </div>
                                <div className="operations">
                                    <button className="btn btn-light mx-4">Guarda ora</button>
                                    <button className="btn btn-secondary">Episodi</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}