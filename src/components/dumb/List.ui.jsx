import Card from "../smart/Card";
import CardSeries from "../smart/CardSeries";

export default function ListUi({ movies, series }) {

    return (
        <><section className="lists">
            <div className="container-fluid">
                <h1>movies</h1>
                <div className=" movies d-flex">

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
        </section>


        </>
    )
}