import Card from "../smart/Card";
import CardSeries from "../smart/CardSeries";

export default function ListUi({ movies, series, scrollRef, scroll }) {

    return (
        <>
            <section className="lists">
                <div className="container-fluid">
                    <button onClick={() => scroll('left')}>scroll left</button>
                    <div className="lists_scroll">
                        <h1>movies</h1>
                        <div ref={scrollRef} className=" movies d-flex">

                            {movies.map(item => (
                                <Card key={item.id} movie={item} />
                            ))}


                        </div >
                        <h1>Series</h1>
                        <div className=" series d-flex">
                            {series.map(item => (
                                <CardSeries key={item.id} serie={item} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}