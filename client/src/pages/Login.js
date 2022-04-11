// import React, { useEffect, useRef, useState, useContext } from "react";
// import AuthContext from "../context/AuthProvider";

// import "../CSS Files/Login.css";

// import axios from "../api/axios";
// const LOGIN_URL = "/auth";

// const Login = () => {
//   const { setAuth } = useContext(AuthContext);
//   const emailRef = useRef();
//   const errRef = useRef();

//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     emailRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [email, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ email, pwd }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       setAuth({ email, pwd, roles, accessToken });
//       setEmail("");
//       setPwd("");
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Missing Email or Password");
//       } else if (err.response?.status === 401) {
//         setErrMsg("Unauthorized");
//       } else {
//         setErrMsg("Login Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <div id='login-page-wrapper'>
//       {success ? (
//         <section>
//           <h1>You are logged in!</h1>
//           <br />
//           <p>
//             <a href='/user-profile'>Go to Profile</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errMsg" : "offscreen"}
//             aria-live='assertive'
//           >
//             {errMsg}
//           </p>
//           <div className='container'>
//             {/* <h1>Log In</h1> */}
//             <form onSubmit={handleSubmit}>
//               <input
//                 placeholder='   Email'
//                 type='email'
//                 id='email'
//                 ref={emailRef}
//                 autoComplete='off'
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 required
//               />
//               <input
//                 placeholder='   Password'
//                 type='password'
//                 id='password'
//                 autoComplete='off'
//                 onChange={(e) => setPwd(e.target.value)}
//                 value={pwd}
//                 required
//               />
//               <div className='button-container'>
//                 <button>Log In</button>
//               </div>
//               <div className='signup-link'>
//                 <p>
//                   Need an Account? <a href='/signup'>Sign Up</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Login;

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ApiCall } from "../API Call/ApiCall";
import Logo from "../Gallery/logo.png";
import Image1 from "../Gallery/Stock Photos/orchid-15.png";
// import { UserReducer } from "../Reducers/UserReducer";

import "../CSS Files/Login.css";

function Login() {
  const state = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const initialValue = useRef(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (!initialValue.current) {
      console.log(state);
    } else {
      initialValue.current = false;
    }
    return () => {
      navigate.push("/");
    };
  }, [state, navigate]);

  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailval !== "" || passval !== "") {
      ApiCall({ email: emailval, password: passval }, dispatch);
      setemailval("");
      setpassval("");
    }
  };

  return (
    <div className='main-login'>
      <div className='login-contain'>
        <div className='left-side'>
          <div className='img-class'>
            <img src={Logo} id='img-id' alt='' />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='emil1'>Email:</label>
            <input
              placeholder='Email'
              type='email'
              value={emailval}
              onChange={(e) => {
                setemailval(e.target.value);
              }}
              id='emil1'
            />
            <label htmlFor='pwd1'>Password:</label>
            <input
              placeholder='Password'
              type='password'
              autoComplete='false'
              value={passval}
              onChange={(e) => {
                setpassval(e.target.value);
              }}
              id='pwd1'
            />
            <button type='submit' id='sub_butt'>
              Login
            </button>
          </form>
          <div className='footer'>
            <h4>
              Need an Account?{" "}
              <Link className='link' to='/signup'>
                Sign Up
              </Link>
            </h4>
          </div>
        </div>
        <div className='right-side'>
          <div className='welcomeNote'>
            <h3>Welcome Back!</h3>
          </div>
          <div className='welcomeImg'>
            <img src={Image1} id='wel-img-id' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
