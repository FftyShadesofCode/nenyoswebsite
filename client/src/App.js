import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Logo from './Gallery/logo.png'

import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <Router basename='/'>
                <header>
                    <div className="nav-area">
                        <a href="/" className="logo">
                            <img src={Logo} alt="NENYOS Logo" className="logo-image"/>
                        </a>
                        <Navbar/>
                    </div>
                </header>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;