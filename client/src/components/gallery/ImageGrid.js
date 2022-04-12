import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion'
import CircularProgress from "@material-ui/core/CircularProgress";
import {getImages, getImageUrl} from "../../api/apicalls";

const ImageGrid = ({ setSelectedImg, reload, setReload }) => {
    const [ values, setValues ] = useState({
        images: [],
        error: ''
    })

    const { images, error } = values

    useEffect(() => {
        if(reload) {
            getImages().then(response => {
                if (response.error) {
                    setValues({
                        ...values,
                        error: response.error
                    })
                } else {
                    setValues({
                        ...values,
                        images: response,
                        error: ''
                    })
                }
                setReload(false)
            })
        }
    })

    return (
        <div className='images'>
            { error && <h1 className='error'>{error}</h1> }
            { images.length>0 && images.map(( data, index) => (
                <motion.div
                    layout
                    className='img-wrap'
                    onClick={() => setSelectedImg(data?._id)}
                    key={data?._id}
                    >

                    <motion.img
                        whileHover={{opacity:1}}
                        src={getImageUrl(data?._id)}
                    />

                </motion.div>
            ))}
            { images.length === 0 && !error &&
                (
                    <CircularProgress color='secondary' />
                )
            }
        </div>

    )
}

export default ImageGrid;