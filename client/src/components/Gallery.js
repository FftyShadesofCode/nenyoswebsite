import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

const PHOTOS = [

];

export default function ImageGallery() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                Open gallery
            </button>
            <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};