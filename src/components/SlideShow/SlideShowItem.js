import React from 'react';

function SlideShowItem({ picture, width }) {
    console.log(picture);
    return (
        <div
            className="slideshow-item"
            style={{
                width: width,
                backgroundImage: `url(${picture})`
            }}>
        </div>
    );
}

export default SlideShowItem;