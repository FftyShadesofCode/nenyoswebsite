import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ApiCall } from "../API Call/ApiCall";
import Logo from "../Gallery/logo.png";
import Image1 from "../Gallery/Stock Photos/orchid-15.png";

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
      navigate("/");
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
            {/* <label htmlFor='emil1'>Email:</label> */}
            <input
              placeholder='Email'
              type='email'
              value={emailval}
              onChange={(e) => {
                setemailval(e.target.value);
              }}
              id='emil1'
            />
            {/* <label htmlFor='pwd1'>Password:</label> */}
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
              Log In
            </button>
          </form>
          <div className='footer'>
            <p>
              Need an Account?{" "}
              <Link className='link' to='/signup'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className='right-side' right='true'>
          <div className='welcomeNote'>
            <h3>Welcome Back</h3>
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
