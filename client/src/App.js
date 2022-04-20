import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// CSS Files
import "./CSS Files/components/Footer.css";
import "../src/CSS Files/App.css";

// Pages and Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Uploader from "./pages/Uploader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import January2022 from "./pages/gallery2022/January";
import GrowerProfile from "./pages/GrowerProfile";
import DevTeam from "./pages/DevTeam";
import AdminDashboard from "./pages/AdminDashboard";
import TreasureReport from "./pages/Dashboard/TreasureReport";
import MeetingLocations from "./pages/Dashboard/MeetingLocations";
import Memberships from "./pages/Dashboard/Memberships";
import Speakers from "./pages/Dashboard/Speakers";

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
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/uploader' element={<Uploader />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/jan-22' element={<January2022 />} />
              <Route exact path='/growerprofile' element={<GrowerProfile />} />
              <Route exact path='/devteam' element={<DevTeam />} />
               {/*Dashboard Routes*/}
              <Route exact path='/admin' element={<AdminDashboard />} />
              <Route exact path='/admin/meetinglocations' element={<MeetingLocations />} />
              <Route exact path='/admin/speakers' element={<Speakers />} />
              <Route exact path='/admin/membership' element={<Memberships />} />
              <Route exact path='/admin/cultureinformation' element={<Memberships />} />
              <Route exact path='/admin/treasurereport' element={<TreasureReport />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
