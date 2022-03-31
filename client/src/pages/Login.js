import React, { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "../firebase";

import UserProfile from "./UserProfile";

import "../CSS Files/Login.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className='login-container'>
      {!currentUser && (
        <div className='login-form'>
          <div className='title'>Log In</div>
          <div className='currentUser'>
            Currently logged in as: {currentUser?.email}{" "}
          </div>

          <form>
            <div className='input-container'>
              <input ref={emailRef} type='email' placeholder='Email' />
            </div>
            <div className='input-container'>
              <input ref={passwordRef} type='password' placeholder='Password' />
            </div>

            <div className='button-container'>
              <button disabled={loading} onClick={handleSignup}>
                <a href='/signup'>Sign Up</a>
              </button>
              <button disabled={loading} onClick={handleLogin}>
                Log In
              </button>
            </div>
          </form>
        </div>
      )}

      {currentUser && (
        <>
          <UserProfile />
          <button disabled={loading || !currentUser} onClick={handleLogout}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
