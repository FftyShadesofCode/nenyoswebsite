import React, { useState } from "react"
import { FileUploader } from "react-drag-drop-files"

import '../App.css'

const fileTypes = ["JPG", "PNG", "GIF"]

function DragDrop() {
    const [file, setFile] = useState('')

    const handleChange = (file) => {
        setFile(file)
    }
    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    )
}

export default DragDrop