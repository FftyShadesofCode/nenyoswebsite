import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './Gallery/logo.png'

import './App.css';
import Home from "./pages/Home";

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
                </Routes>
            </Router>
        </div>
    );
}

export default App;