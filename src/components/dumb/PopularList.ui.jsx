import Card from "../smart/Card"
import Carousel from "./Carousel.ui";
import { useMovieContext } from "../../contexts/movieContext"

export default function PopularListUi() {

    const { popular } = useMovieContext();
    console.log(popular);


    switch (popular.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>There was an error loading the page:</h1>
                    <span>{popular.message}</span>
                </>
            )
        case 'success':
            return (
                <>
                    <Carousel title={'Popular'} content={
                        popular.moviesPopular.map(item => (
                            <Card key={item.id} movie={item} />
                        ))

                    } />
                </>
            )
    }


}