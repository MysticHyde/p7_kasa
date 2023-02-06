import React from 'react';

function SlideShowItem({ picture, width }) {
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