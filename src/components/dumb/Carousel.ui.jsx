import { useRef } from "react";

export default function Carousel({ content, title }) {

    const scrollRef = useRef();


    function scroll(direction) {
        const { current } = scrollRef;
        const scrollAmount = 300;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }
    return (
        <>
            <div className="item_list">
                <h1>{title}</h1>
                <div className="container-fluid d-flex justify-content-between">
                    <button onClick={() => scroll('left')}>scroll left</button>
                    <div ref={scrollRef} className="lists_scroll movies d-flex">
                        {content}
                    </div >
                    <button onClick={() => scroll('right')}>scroll left</button>
                </div>
            </div>
        </>
    )
}