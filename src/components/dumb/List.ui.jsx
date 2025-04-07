import Card from "../smart/Card";
import CardSeries from "../smart/CardSeries";
import Carousel from "./Carousel.ui";

export default function ListUi({ movies, series, scrollRef, scroll, scrollRefDown }) {

    return (
        <>
            <section className="lists">
                <div className="container-fluid">

                    <Carousel content={<>
                        {
                            movies.map(item => (
                                <Card key={item.id} movie={item} />
                            ))
                        }
                    </>} title={'Movies'} />
                    <Carousel content={<>
                        {
                            series.map(item => (
                                <CardSeries key={item.id} serie={item} />
                            ))
                        }
                    </>} title={'Series'} />

                </div>
            </section>


        </>
    )
}