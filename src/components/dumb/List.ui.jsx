export default function ListUi({ movies }) {

    console.log(movies);

    return (
        <>
            <div className="container">
                <h1>list</h1>
                {movies.map(item => (
                    <h4 key={item.id}> {item.title}</h4>
                ))}
            </div >
        </>
    )
}