import React from 'react'
import { motion } from 'framer-motion'
import {getImageUrl} from "../../api/apicalls";

export default function Model({ selectedImg, setSelectedImg }) {
    return (
        <motion.div
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', stiffness: 400}}
            className='model'
            onClick={(e) => {
                if(e.target.classList.contains('model')) {
                    setSelectedImg('')
                }
            }}
        >
            <motion.img
                initial={{opacity:.5}}
                animate={{opacity:1}}
                src={getImageUrl(selectedImg)}
            />
        </motion.div>
    );
};