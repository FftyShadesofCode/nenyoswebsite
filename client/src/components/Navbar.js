import React, { useState } from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import '../CSS Files/Navbar.css'

export default function NavBar() {

    return (
        <Navbar className='container-fluid' expand='lg' collapseOnSelect >
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/contact'>Contact Us</Nav.Link>
                    <NavDropdown title='Galleries' >
                        <NavDropdown className='dropright' title='2022'>
                            <NavDropdown.Item href='/jan-2022'>January</NavDropdown.Item>
                            <NavDropdown.Item href='/feb-2022'>February</NavDropdown.Item>
                            <NavDropdown.Item href='/march-2022'>March</NavDropdown.Item>
                            <NavDropdown.Item href='/april-2022'>April</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/uploader'>Uploader</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/uploader'>Uploader</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <form action=''>
                <input type='search'/>
                <button>Search</button>
            </form>

            <Navbar.Collapse>
                <Nav>
                    <Nav.Link right href='/login'>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};