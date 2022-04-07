import React from "react";
import { FaGithub } from "react-icons/fa";
import "../CSS Files/DevTeam.css";
import "../CSS Files/Footer.css";

function DevTeam() {
  return (
    <div className='background'>
      <div className='team'>
        <h1>Meet BroCode</h1>
      </div>
      <div className='container'>
        <div className='member'>
          <img
            src={require("../Gallery/Dev Team/Philip.PNG")}
            alt='Philip R. McDavid'
          />
          <div className='member-title'>
            <h3>
              Philip R. McDavid{" "}
              <a
                href='https://github.com/FftyShadesofCode'
                target='_blank'
                // rel='noferrer'
              >
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Fullstack Engineer</h5>
          </div>
        </div>
        <div className='member'>
          <img
            src={require("../Gallery/Dev Team/Ryan.PNG")}
            alt='Ryan G. Howard'
          />
          <div className='member-title'>
            <h3>
              Ryan G. Howard{" "}
              <a
                href='https://github.com/ryanghoward'
                target='_blank'
                rel='noferrer'
              >
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Frontend Engineer</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevTeam;
