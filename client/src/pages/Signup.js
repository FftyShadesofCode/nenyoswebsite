import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../CSS Files/Signup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "100vw",
    height: "87.7vh",
    // marginLeft: "40%",
    borderRadius: "2rem",
    // backgroundColor: "transparent"
    backdropFilter: "blur(15px)",
    border: "1px solid #c9c9c980",

    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "19rem",
      backgroundColor: "white",
      borderRadius: "1rem",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      display: "flex",
      height: "3rem",
      // width: "100%",
    },
  },
}));

const Signup = () => {
  const [ values, setValues ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  });


  const { firstName, lastName, email, password, error, loading, message, showForm } = values

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( firstName, lastName, email, password, error, loading, message, showForm )
  };

  const handleChange = (e) => {
    setValues({ ...values, error: false, value: e.target.value})
  }

  return (
      <form onSubmit={handleSubmit} action=''>
        <div className='form-group'>
          <input
              type='text'
              className='form-control'
              value={firstName}
              onChange={handleChange('firstName')}
              placeholder='First Name'
          />
          <input
              type='text'
              className='form-control'
              value={lastName}
              onChange={handleChange('lastName')}
              placeholder='Last Name'
          />
        </div>

        <div className='form-group'>
          <input
              type='email'
              className='form-control'
              value={email}
              onChange={handleChange('email')}
              placeholder='Email Address'
          />
        </div>

        <div className='form-group'>
          <input
              type='password'
              className='form-control'
              value={password}
              onChange={handleChange('password')}
              placeholder='Password'
          />
        </div>
      </form>
  );
};

export default Signup;
