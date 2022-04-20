import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMapPin, faChalkboardTeacher, faUsers, faLeaf, faCoins } from '@fortawesome/free-solid-svg-icons'

import '../CSS Files/components/Dashboard/Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <ul className='links'>
                <li className='selected'>
                    <a href='/admin' >
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </li>
                <li className='selected'>
                    <a href='/admin/meetinglocations' >
                        <FontAwesomeIcon icon={faMapPin} />
                    </a>
                </li>
                <li className='selected'>
                    <a href='/admin/speakers' >
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </a>
                </li>
                <li className='selected'>
                    <a href='/admin/membership' >
                        <FontAwesomeIcon icon={faUsers} />
                    </a>
                </li>
                <li className='selected'>
                    <a href='/admin/cultureinformation' >
                        <FontAwesomeIcon icon={faLeaf} />
                    </a>
                </li>
                <li className='selected'>
                    <a href='/admin/treasurereport'>
                        <FontAwesomeIcon icon={faCoins} />
                    </a>
                </li>
            </ul>
        </div>
    );
};