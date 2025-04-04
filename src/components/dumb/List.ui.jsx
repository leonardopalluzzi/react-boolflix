import CardUi from "./Card.ui";

export default function ListUi({ movies }) {

    console.log(movies);

    return (
        <>
            <div className="container">
                <h1>list</h1>
                {movies.map(item => (
                    <CardUi key={item.id} movie={item} />
                ))}
            </div >
        </>
    )
}