// import React, {useEffect, useState} from "react";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import "../CSS Files/Signup.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),
//     width: "100vw",
//     height: "87.7vh",
//     // marginLeft: "40%",
//     borderRadius: "2rem",
//     // backgroundColor: "transparent"
//     backdropFilter: "blur(15px)",
//     border: "1px solid #c9c9c980",

//     "& .MuiTextField-root": {
//       margin: theme.spacing(0.5),
//       width: "19rem",
//       backgroundColor: "white",
//       borderRadius: "1rem",
//     },
//     "& .MuiButtonBase-root": {
//       margin: theme.spacing(2),
//       display: "flex",
//       height: "3rem",
//       // width: "100%",
//     },
//   },
// }));

// const Signup = () => {
//   const [ values, setValues ] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     error: '',
//     loading: false,
//     message: '',
//     showForm: true
//   });

//   const { firstName, lastName, email, password, error, loading, message, showForm } = values

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log( firstName, lastName, email, password, error, loading, message, showForm )
//   };

//   const handleChange = (e) => {
//     setValues({ ...values, error: false, value: e.target.value})
//   }

//   return (
//       <div className='login-page-wrapper'>
//         <div className='container'>
//           <form onSubmit={handleSubmit} action=''>
//             <div className='form-group'>
//               <input
//                   type='text'
//                   className='form-control'
//                   value={firstName}
//                   onChange={handleChange}
//                   placeholder='First Name'
//               />
//               <input
//                   type='text'
//                   className='form-control'
//                   value={lastName}
//                   onChange={handleChange}
//                   placeholder='Last Name'
//               />
//             </div>

//             <div className='form-group'>
//               <input
//                   type='email'
//                   className='form-control'
//                   value={email}
//                   onChange={handleChange}
//                   placeholder='Email Address'
//               />
//             </div>

//             <div className='form-group'>
//               <input
//                   type='password'
//                   className='form-control'
//                   value={password}
//                   onChange={handleChange}
//                   placeholder='Password'
//               />
//               <input
//                   type='password'
//                   className='form-control'
//                   value={password}
//                   onChange={handleChange}
//                   placeholder='Password Confirmation'
//               />
//             </div>
//             <div className='button-container'>
//               <button>Sign Up</button>
//               <button>Log In</button>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import "../CSS Files/Signup.css";
import { Link } from "react-router-dom";
import Logo from "../Gallery/logo.png";
import Image1 from "../Gallery/Stock Photos/orchid-15.png";

function Signup() {
  const [email, setemail] = useState("");
  const [Fusername, setFusername] = useState("");
  const [Susername, setSusername] = useState("");
  const [pwd1, setpwd1] = useState("");
  const [pwd2, setpwd2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='main-Register'>
      <div className='left-side'>
        <div className='header'>
          <img src={Logo} id='logo-img' alt='' srcset='' />
        </div>
        <div className='body'>
          <img src={Image1} id='reg-img' alt='' srcset='' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, et.
        </p>
      </div>
      <div className='right-side'>
        <div className='top-right'>
          <p>
            Already have an account?
            <Link id='Links-signin' to='/login'>
              Log In
            </Link>
          </p>
        </div>
        <div className='body-right'>
          <div className='container'>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
              <div className='input-group'>
                <h5>First Name</h5>
                <input
                  type='text'
                  name='Fname'
                  value={Fusername}
                  onChange={(e) => {
                    setFusername(e.target.value);
                  }}
                  id='fname'
                />
              </div>
              <div className='input-group'>
                <h5>Last Name</h5>
                <input
                  type='text'
                  name='lname'
                  value={Susername}
                  onChange={(e) => {
                    setSusername(e.target.value);
                  }}
                  id='lname'
                />
              </div>
              <div className='input-group'>
                <h5>Email</h5>
                <input
                  type='Email'
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  id='email1'
                />
              </div>
              <div className='input-group'>
                <h5>Password</h5>
                <input
                  type='password'
                  value={pwd1}
                  name='pwd'
                  onChange={(e) => {
                    setpwd1(e.target.value);
                  }}
                  id='pwd1'
                />
              </div>
              <div className='input-group'>
                <h5>Confrim Password</h5>
                <input
                  type='password'
                  name='pwd'
                  value={pwd2}
                  onChange={(e) => {
                    setpwd2(e.target.value);
                  }}
                  id='pwd2'
                />
              </div>
              <input type='submit' id='sbtn' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
