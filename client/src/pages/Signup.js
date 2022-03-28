// import { useState } from "react";
// import { Button } from "@mui/material";
// import ModalDialog from "../components/ModalDialog";
// import "../CSS Files/Signup.css";

// const Signup = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='App'>
//       <Button
//         className='button'
//         variant='contained'
//         size='large'
//         color='success'
//         onClick={handleOpen}
//       >
//         Sign Up
//       </Button>
//       <ModalDialog open={open} handleClose={handleClose} />
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
// import Login from "./Login";
// import "../CSS Files/Signup.css";
import "../CSS Files/Login.css";
import { Link } from "react-router-dom";
import mail from "../Gallery/Login Images/email.png";
import lock from "../Gallery/Login Images/lock.png";
import profile from "../Gallery/Login Images/icon.jpg";

function Signup() {
  const LOCAL_STORAGE_KEY = "Info";

  const [Info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setInfo(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info));
  }, [Info]);

  let register = (e) => {
    e.preventDefault();

    if (!Info.name || !Info.email || !Info.password || !Info.profession) {
      alert("Complete all the fields!!!");
      return;
    }
  };

  return (
    <form onSubmit={register}>
      <div className='main'>
        <div className='sub-main'>
          <div>
            <div>
              <h1>Sign Up</h1>
              <div>
                <img src={profile} alt='email' className='email' />
                <input
                  type='text'
                  placeholder='Username'
                  className='fill'
                  value={Info.name}
                  onChange={(e) => setInfo({ ...Info, name: e.target.value })}
                />
              </div>
              <div className='mail-id'>
                <img src={mail} alt='email' className='email' />
                <input
                  type='email'
                  placeholder='Email'
                  className='fill'
                  value={Info.email}
                  onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                />
              </div>
              <div className='mail-id'>
                <img src={lock} alt='email' className='email' />
                <input
                  type='password'
                  placeholder='Password'
                  className='fill'
                  value={Info.password}
                  onChange={(e) =>
                    setInfo({ ...Info, password: e.target.value })
                  }
                />
              </div>
              <div className='login-btn'>
                <Link to='/home'>
                  <button type='submit'>Sign Up</button>
                </Link>
              </div>
              <div className='reg-link'>
                <p>Already have an account?</p>
                <Link className='link' to='/login'>
                  <li>Log In</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
