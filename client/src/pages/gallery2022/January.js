import React, {useState} from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

import 'react-bnb-gallery/dist/style.css'

const PHOTOS = [

]

export default function January2022() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="gallery-container">
            <button onClick={() => setIsOpen(true)}>
                Open gallery
            </button>
            <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};