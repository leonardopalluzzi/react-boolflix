import { useMovieContext } from "../../contexts/movieContext"
import HeaderUi from "../dumb/Header.ui"

export default function Header() {

    const { handleFetch, searchText, setSearchText } = useMovieContext()
    console.log(searchText);

    function handleOnChange(value) {
        setSearchText(value)
    }

    function handleSearchSubmit() {
        handleFetch()
    }

    return (
        <>
            <HeaderUi
                searchText={searchText}
                onTextChange={handleOnChange}
                onSearchSubmit={handleSearchSubmit}
            />
        </>
    )
}