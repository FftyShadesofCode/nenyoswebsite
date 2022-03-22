import React from 'react'
import PropTypes from "prop-types";

const DropDown = ({value, label, data, placeholder, onChange}) => {

    const handleChange = (e) => {
        const {value} = e.target
        onChange(value)
    }

    return (
        <div className={`form-group`}>
            { label && <label htmlFor='app-input-field'>{label}</label>}
            <select
                value={{data}}
                className='form-control'
                onChange={handleChange}>
                <option value=''>{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

DropDown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

DropDown.defaultProps = {
    value: '',
    placeholder: ''
}

export default DropDown