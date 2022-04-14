import React from "react";
import "../CSS Files/components/Footer.css";

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='copyright'>
        <p>Copyright © 2022 NENYOS. All Rights Reserved.</p>
      </div>
      <div className='team-link'>
        Site built by <a href='/devteam'>BroCode</a>
      </div>
    </footer>
  );
}

export default Footer;
