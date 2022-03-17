import React, {useEffect, useState} from 'react'

export default function Uploader({ formData }) {
    const [page, setPage] = useState(0)
    const [currentPageData, setCurrentPageData] = useState(formData[page])
    const [values, setValues] = useState({})

    useEffect(() => {
            const upcomingPageData = formData[page];
            setCurrentPageData(upcomingPageData);
            setValues(currentValues => {
                    const newValues = upcomingPageData.fields.reduce((obj, field) => {
                            if (field.component === "field_group") {
                                for (const subField of field.fields) {
                                    obj[subField.uuid] = "";
                                }
                            } else {
                                obj[field.uuid] = "";
                            }

                            const fieldChanged = (fieldId, value) => {
                                setValues(currentValues => {
                                    currentValues[fieldId] = value;
                                    return currentValues;
                                });

                                setCurrentPageData(currentPageData => {
                                    return Object.assign({}, currentPageData);
                                });
                            };

                            const onSubmit = e => {
                                e.preventDefault();
                                // todo - send data somewhere
                            };

                            return (
                                <form onSubmit={onSubmit}>
                                    <h2>{currentPageData.label}</h2>
                                    
                                </form>
                            );
                        }
                    )
                }
            )
        }
    )
}
