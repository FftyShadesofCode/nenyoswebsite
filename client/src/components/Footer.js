import React from "react";
import "../CSS Files/Footer.css";

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='copyright'>
        <p>Copyright © 2022 NENYOS. All Rights Reserved</p>
      </div>
      <div className='team-link'>
        <a href='/devteam'>Meet the Dev Team</a>
      </div>
    </footer>
  );
}

export default Footer;
