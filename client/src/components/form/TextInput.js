import React, {useState} from 'react'
import PropTypes from 'prop-types'

import '../../CSS Files/Uploader.css'

const TextInput = ({value, label, placeholder, type, onChange}) => {
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const {value} = e.target
        onChange(value)
    }
    return (
        <div className='form-group' >
            { label && <label htmlFor='app-input-field'>{label}</label>}
            <input
                type={type}
                value={value}
                className='form-control'
                placeholder={placeholder}
                onChange={handleChange} />
            {error && <span className='text-danger'>{error}</span>}
        </div>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text',

}

export default TextInput