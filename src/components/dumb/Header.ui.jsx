import SearchForm from "./SearchForm"

export default function HeaderUi({ searchText, onTextChange, onSearchSubmit }) {
    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-sm navbar-transparent bg-transparent"
                >
                    <div className="container">
                        <img className="logo" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page"
                                    >Home
                                        <span className="visually-hidden">(current)</span></a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Serie TV</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Film</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Popolari</a>
                                </li>
                            </ul>

                            <SearchForm searchText={searchText} onTextChange={onTextChange} onSearchSubmit={onSearchSubmit} />

                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}