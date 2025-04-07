import Card from "../smart/Card";
import CardSeries from "../smart/CardSeries";

export default function ListUi({ movies, series, scrollRef, scroll, scrollRefDown }) {

    return (
        <>
            <section className="lists">
                <div className="container-fluid">

                    <div className="item_list">
                        <h1>movies</h1>
                        <div className="container-fluid d-flex justify-content-between">
                            <button onClick={() => scroll('left')}>scroll left</button>

                            <div ref={scrollRef} className="lists_scroll movies d-flex">

                                {movies.map(item => (
                                    <Card key={item.id} movie={item} />
                                ))}
                            </div >
                            <button onClick={() => scroll('right')}>scroll left</button>
                        </div>
                    </div>
                    <div className="item_list">
                        <h1>Series</h1>
                        <div className="container-fluid d-flex justify-content-between">
                            <button onClick={() => scroll('left')}>scroll left</button>
                            <div ref={scrollRefDown} className="lists_scroll series d-flex">
                                {series.map(item => (
                                    <CardSeries key={item.id} serie={item} />
                                ))}
                            </div>
                            <button onClick={() => scroll('right')}>scroll left</button>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}