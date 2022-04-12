import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProgressBar from "./ProgressBar";
import graphic from '../../icons/image-files.svg'

export default function UploadImage({ setReload }) {
    const type = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg']

    const [ values, setValues ] = useState({
        file: '',
        formData: new FormData(),
        error: ''
    })

    const { file, formData, error } = values

    const handleChange = (e) => {
        const value = e.target.files[0]
        if(!type.includes(value.type)) {
            setValues({
                ...values,
                error: 'Invalid File Format'
            })
        }
        if (value && type.includes(value.type))
        {
            setValues({
                ...values,
                file: value
            })
            formData.set('image', value)
        }
    }

    return (
        <div>
            <form>
                <motion.img
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2}}
                    id='bold'
                    height='100'
                    width='100'
                    src={graphic}
                    />
                <label>
                    <input
                        onChange={(e) =>
                                handleChange(e)
                            }
                        type='file'
                        placeholder='Choose File'
                    />
                    <span>Add</span>
                </label>
                { file && <ProgressBar setReload={setReload} values={values} setValues={setValues} /> }
                { error && <h1 className='error'>{error}</h1> }
            </form>
        </div>
    );
};