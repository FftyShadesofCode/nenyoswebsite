import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../CSS Files/Signup.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),

//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "300px",
//     },
//     "& .MuiButtonBase-root": {
//       margin: theme.spacing(2),
//     },
//   },
// }));

const Form = ({ handleClose }) => {
  // const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleClose();
  // };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    username: "Invalid Username",
    password: "Invalid Password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = document.forms[0];
    const userData = database.find((user) => user.username === username.value);
    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // return (
  //   <form className='signup-form' onSubmit={handleSubmit}>
  //     <TextField
  //       label='First Name'
  //       variant='filled'
  //       required
  //       value={firstName}
  //       onChange={(e) => setFirstName(e.target.value)}
  //     />
  //     <TextField
  //        label='Last Name'
  //        variant='filled'
  //        required
  //        value={lastName}
  //        onChange={(e) => setLastName(e.target.value)}
  //     />
  //     <TextField
  //       label='Email'
  //       variant='filled'
  //       type='email'
  //       required
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <TextField
  //       label='Password'
  //       variant='filled'
  //       type='password'
  //       required
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <div>
  //       <Button variant='contained' onClick={handleClose}>
  //         Cancel
  //       </Button>
  //       <Button type='submit' variant='contained' color='primary'>
  //         Sign Up
  //       </Button>
  //     </div>
  //     <div className='login-link'>
  //       Already have an account? <a href='/login'>Log In</a>
  //     </div>
  //   </form>
  // );

  //! MOVING TEXTFIELDS ABOVE DOWN TO INPUTS BELOW

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            label='First Name'
            placeholder=' First Name'
            variant='filled'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {renderErrorMessage("username")}
          <input
            label='Last Name'
            placeholder=' Last Name'
            variant='filled'
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            label='Email'
            placeholder=' Email'
            variant='filled'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            label='Password'
            placeholder=' Password'
            variant='filled'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("password")}
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
        <div className='signup-link'>
          Don't have an account? <a href='/signup'>Sign Up</a>
        </div>
      </form>
    </div>
  );

  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='title'>Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Form;
