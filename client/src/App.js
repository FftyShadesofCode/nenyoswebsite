import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS Files
import "../src/CSS Files/Footer.css";
import "../src/CSS Files/App.css";

// Pages and Components
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Uploader from "./pages/Uploader";
import January2022 from "./pages/gallery2022/January";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import DevTeam from "./pages/DevTeam";

function App() {
  return (
    <div>
      <Router basename='/'>
        <header>
          <div className='nav-area'>
            <NavBar />
          </div>
        </header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/uploader' element={<Uploader />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/jan-22' element={<January2022 />} />
          <Route exact path='/user-profile' element={<UserProfile />} />
          <Route exact path='/devteam' element={<DevTeam />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
