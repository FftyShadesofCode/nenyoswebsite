import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./Gallery/logo.png";

import "../src/CSS Files/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Uploader from "./pages/Uploader";
import January2022 from "./pages/gallery2022/January";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    main: "#6fc363",
  },
  secondary: "#feaec9",
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router basename='/'>
          <header>
            <div className='nav-area'>
              <a href='/' className='logo'>
                <img src={Logo} alt='NENYOS Logo' className='logo-image' />
              </a>
              <Navbar />
            </div>
          </header>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/uploader' element={<Uploader />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/jan-22' element={<January2022 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
