import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// CSS Files
import "./CSS Files/components/Footer.css";
import "../src/CSS Files/App.css";

// Pages and Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <Router basename='/'>
        <header>
          <div className='nav-area'>
            <NavBar />
          </div>
          <Routing />
        </header>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
