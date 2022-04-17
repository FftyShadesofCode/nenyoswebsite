import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMapPin, faChalkboardTeacher, faUsers, faLeaf } from '@fortawesome/free-solid-svg-icons'

import '../../CSS Files/components/Dashboard/Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <ul className='links'>
                <li className='selected'>
                    <FontAwesomeIcon icon={faBars} />
                </li>
            </ul>
            <ul className='links'>
                <li className='selected'>
                    <FontAwesomeIcon icon={faMapPin} />
                </li>
            </ul>
            <ul className='links'>
                <li className='selected'>
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                </li>
            </ul>
            <ul className='links'>
                <li className='selected'>
                    <FontAwesomeIcon icon={faUsers} />
                </li>
            </ul>
            <ul className='links'>
                <li className='selected'>
                    <FontAwesomeIcon icon={faLeaf} />
                </li>
            </ul>
            <ul className='links'>
                <li className='selected'>

                </li>
            </ul>
        </div>
    );
};