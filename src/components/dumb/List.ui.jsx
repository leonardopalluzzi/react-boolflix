import CardUi from "./Card.ui";
import CardSerieUi from "./CardSerie.ui";

export default function ListUi({ movies, series }) {

    return (
        <>
            <div className="container">
                <h1>movies</h1>
                {movies.map(item => (
                    <CardUi key={item.id} movie={item} />
                ))}
                <h1>Series</h1>
                {series.map(item => (
                    <CardSerieUi key={item.id} serie={item} />
                ))}
            </div >
        </>
    )
}