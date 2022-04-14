import React, {useCallback, useEffect, useState} from "react"
// Import the useDropzone hooks from react-dropzone
import {useDropzone} from "react-dropzone";

import '../CSS Files/pages/Uploader.css'

const Dropzone = () => {
    const [images, setImages] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        setImages(acceptedFiles.map(file =>
        Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
        ))
    }, [])

    useEffect(() => {
    console.log(images)
}, [images])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/png,image/jpg,image/jpeg,image/svg,image/gif,image/heic'
})

    return (
        <div className='uploader'>
            <div className='dropzone' {...getRootProps()}>
                    <input {...getInputProps()} />
                    { isDragActive ? 'Release Files' : `Drag 'n' drop some files here, or click to select files`}
            </div>
            {images.length > 0 && <div>
                {images.map((image, index) => <img className='selected-images' src={image} key={index}  alt=''/> )}
            </div>}
        </div>
    )
}

export default Dropzone