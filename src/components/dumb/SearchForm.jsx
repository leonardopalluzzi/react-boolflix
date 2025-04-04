export default function SearchForm({ onSearchSubmit, onTextChange, searchText }) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSearchSubmit() }} method="GET" className="d-flex my-2 my-lg-0">
                <input
                    className="form-control me-sm-2"
                    type="text"
                    value={searchText}
                    onChange={(e) => onTextChange(e.target.value)}
                    placeholder="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </>
    )
}