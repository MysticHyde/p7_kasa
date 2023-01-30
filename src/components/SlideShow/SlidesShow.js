import React, { useState } from "react";
import SlideShowItem from "./SlideShowItem";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

function SlideShow({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function updateIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= pictures.length) {
            newIndex = pictures.length - 1;
        }
        setActiveIndex(newIndex);
    }



    return (
        <div className="slideshow">

            <div className="content"
                style={{
                    transform: `translate(-${activeIndex * 100}%)`
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

            <div className="slideshow_buttons">
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

export default SlideShow;