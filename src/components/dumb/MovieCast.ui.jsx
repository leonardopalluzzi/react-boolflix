export default function MovieCastUi({ cast }) {
    console.log(cast);

    return (
        <>
            <h6>Cast: </h6>
            <h5>{cast.map(item => (
                <>
                    <span>{item.name}</span>
                </>
            ))}</h5>
        </>
    )
}