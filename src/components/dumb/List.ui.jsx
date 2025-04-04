import CardUi from "./Card.ui";

export default function ListUi({ movies, series }) {

    console.log(movies);

    return (
        <>
            <div className="container">
                <h1>movies</h1>
                {movies.map(item => (
                    <CardUi key={item.id} movie={item} />
                ))}
                <h1>Series</h1>
                {series.map(item => (
                    <CardUi key={item.id} movie={item} />
                ))}
            </div >
        </>
    )
}