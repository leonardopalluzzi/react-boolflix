import Card from "../smart/Card";
import CardSeries from "../smart/CardSeries";

export default function ListUi({ movies, series }) {

    return (
        <>
            <div className="container">
                <h1>movies</h1>
                {movies.map(item => (
                    <Card key={item.id} movie={item} />
                ))}
                <h1>Series</h1>
                {series.map(item => (
                    <CardSeries key={item.id} serie={item} />
                ))}
            </div >
        </>
    )
}