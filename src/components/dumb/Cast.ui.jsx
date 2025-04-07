export default function MovieCastUi({ cast }) {
    return (
        <>
            <h6>Cast: </h6>
            <h5>{cast.map(item => (

                <span key={item.id}>{item.name}, </span>

            ))}</h5>
        </>
    )
}