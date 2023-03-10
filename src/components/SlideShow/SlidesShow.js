import React, { useState } from "react";
import SlideShowItem from "./SlideShowItem";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

function SlideShow({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function updateIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = pictures.length - 1;
        } else if (newIndex >= pictures.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }



    return (
        <div className="slideshow">

            <div className="content"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`
                }}>
                {Object.keys(pictures).map((index) => {
                    return (
                        <SlideShowItem
                            key={`slideshow_item_+${index}`}
                            picture={pictures[index]}
                            width={"100%"}
                        />
                    );
                })}
            </div>

            <div className="slideshow_buttons" style={pictures.length === 1 ? { display: 'none' } : { display: 'block' }}>
                <button
                    onClick={() => { updateIndex(activeIndex - 1); }}>
                    <Arrow />
                </button>
                <button
                    onClick={() => { updateIndex(activeIndex + 1); }}>
                    <Arrow />
                </button>
                <div className="indicator">
                    {`${activeIndex + 1}/${pictures.length}`}
                </div>
            </div>
        </div>
    );

}
function EmptySlideShow() {
    return (
        <div className="slideshow slideshow--empty">
            <div className="content">
            </div>
        </div>
    );
}

export { SlideShow, EmptySlideShow };