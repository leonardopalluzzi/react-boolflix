export default function JumboUi({ popular, imgPath }) {
    return (
        <>
            <div className="jumbo">
                <div className="container h-100 position-relative">
                    <img className="img_jumbo_big" src={imgPath + popular.moviesPopular[1].poster_path} alt="" />
                    <div className="jumbo_content">
                        <div className="title">
                            <img src="placeholder.png" alt="" />
                            <h3>titolo</h3>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="operations">
                            <button className="btn btn-light mx-4">Guarda ora</button>
                            <button className="btn btn-secondary">Episodi</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}