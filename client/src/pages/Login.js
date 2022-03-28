// import React, { useState } from "react";
// import "../CSS Files/Login.css";

// function Login() {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const database = [
//     {
//       username: "user1",
//       password: "pass1",
//     },
//     {
//       username: "user2",
//       password: "pass2",
//     },
//   ];

//   const errors = {
//     username: "Invalid Username",
//     password: "Invalid Password",
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let { username, password } = document.forms[0];
//     const userData = database.find((user) => user.username === username.value);

//     if (userData) {
//       if (userData.password !== password.value) {
//         setErrorMessages({ name: "password", message: errors.password });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       setErrorMessages({ name: "username", message: errors.username });
//     }
//   };

//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className='error'>{errorMessages.message}</div>
//     );

//   const renderForm = (
//     <div className='form'>
//       <form onSubmit={handleSubmit}>
//         <div className='input-container'>
//           <label>Username </label>
//           <input type='text' name='username' required />
//           {renderErrorMessage("username")}
//         </div>
//         <div className='input-container'>
//           <label>Password </label>
//           <input type='password' name='password' required />
//           {renderErrorMessage("password")}
//         </div>
//         <div className='button-container'>
//           <input type='submit' />
//         </div>
//         <div className='signup-link'>
//           Don't have an account? <a href='/signup'>Join Us!</a>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className='login-container'>
//       <div className='login-form'>
//         <div className='title'>Log In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
// import Signup from "./Signup";
import "../CSS Files/Login.css";
import { Link } from "react-router-dom";
import email from "../Gallery/Login Images/email.png";
import lock from "../Gallery/Login Images/lock.png";
import profile from "../Gallery/Login Images/icon.jpg";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  return (
    <form>
      <div className='main'>
        <div className='sub-main'>
          <div>
            <h1 className='LHeader'>Log In</h1>
            <div className='imgs'>
              <div className='container-image'>
                <img src={profile} alt='profile' className='profile' />
              </div>
            </div>
            <div className='inputs-container'>
              <div className='email-input'>
                {/* <img src={email} alt='email' /> */}
                <input
                  type='text'
                  placeholder='Email'
                  className='fill'
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>
              <div className='password-input'>
                {/* <img src={lock} alt='password' /> */}
                <input
                  type='password'
                  placeholder='Password'
                  className='fill'
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>
              <div className='login-btn'>
                <Link to='/home'>
                  <button type='button'>Log In</button>
                </Link>
              </div>
              {/* <div className='reg-link'> */}
              <div className='signup-link'>
                Don't have an account? <a href='/signup'>Sign Up!</a>{" "}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
