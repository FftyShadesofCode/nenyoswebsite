import React, { useState } from "react";
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
    width: "18vw",
    height: "65vh",
    marginTop: "8%",
    marginLeft: "40%",
    borderRadius: "2rem",
    backgroundColor: "transparent",
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
    },
  },
}));

const Signup = ({ handleClose }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <TextField
        label='First Name'
        variant='filled'
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label='Last Name'
        variant='filled'
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label='Email'
        variant='filled'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Pick a Username'
        variant='filled'
        type='text'
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label='Set your Password'
        variant='filled'
        type='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button variant='contained' onClick={handleClose}>
          Cancel
        </Button>
        <Button type='submit' variant='contained' color='primary'>
          Sign Up
        </Button>
        <div className='login-link'>
          Already have an account? <a href='/login'>Log In</a>
        </div>
      </div>
    </form>
  );
};

export default Signup;
