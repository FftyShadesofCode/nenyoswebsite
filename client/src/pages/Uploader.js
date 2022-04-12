import React, {useState} from 'react'
import {UploaderHeader} from "../components/Uploader/UploaderHeader";
import UploadImage from "../components/gallery/UploadImage";
import ImageGrid from "../components/gallery/ImageGrid";
import Model from "../components/gallery/Model";

export default function Uploader() {
    const [ selectedImg, setSelectedImg ] = useState('')
    const [ reload, setReload ] = useState(true)

    return (
        <div>
            <UploaderHeader />
            <UploadImage setReload={setReload} />
            <ImageGrid setReload={setReload} reload={reload} setSelectedImg={setSelectedImg} />
            { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </div>
    );
};