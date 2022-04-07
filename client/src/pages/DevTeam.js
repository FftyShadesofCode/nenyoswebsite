import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../CSS Files/DevTeam.css";
// import "../CSS Files/Footer.css";

function DevTeam() {
  return (
    <div className='background'>
      <div className='team'>
        <h1>The BroCode Dev Team is:</h1>
      </div>
      <div className='container'>
        <div className='member'>
          <img
            src={require("../Gallery/Dev Team/Philip.PNG")}
            alt='Philip R. McDavid'
          />
          <div className='member-title'>
            <h3>Philip R. McDavid</h3>
            <h5>Fullstack Engineer</h5>
            <div className='icons'>
              <a href='https://github.com/FftyShadesofCode' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/fiftyshadesofcode/'
                target='_blank'
              >
                <FaLinkedin className='linkedin-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='member'>
          <img
            src={require("../Gallery/Dev Team/Ryan.PNG")}
            alt='Ryan G. Howard'
          />
          <div className='member-title'>
            <h3>Ryan G. Howard</h3>
            <h5>Frontend Engineer</h5>
            <div className='icons'>
              <a href='https://github.com/ryanghoward' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/ryangeorgehoward/'
                target='_blank'
              >
                <FaLinkedin className='linkedin-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='member'>
          <img
            src={require("../Gallery/Dev Team/Danielle.PNG")}
            alt='Danielle Y. Strazzeri'
          />
          <div className='member-title'>
            <h3>Danielle Y. Strazzeri</h3>
            <h5>Woman</h5>
            <div className='icons'>
              <a href='https://github.com/dstrazzeri' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/danielle-yvette-strazzeri/'
                target='_blank'
              >
                <FaLinkedin className='linkedin-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevTeam;
