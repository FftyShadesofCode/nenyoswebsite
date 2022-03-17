import React from 'react'
import Uploader from 'Uploader.json'

const Field = ({ field, fieldChanged, type, value}) => {
    return (
        <div key={field.uuid}>
            <label htmlFor="{field.uuid">{field.label}</label>
            <input
                type={type || field.component}
                id={field.uuid}
                name={field.uuid}
                value={value}
                onChange={e => fieldChanged(field.uuid, e.target.value)} />
        </div>
    );
};