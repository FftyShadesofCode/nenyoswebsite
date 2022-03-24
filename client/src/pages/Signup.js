import { useState } from "react";
import { Button } from "@mui/material";
import ModalDialog from "../components/ModalDialog";
import "../CSS Files/Signup.css";
import Form from "../components/Form";

const Signup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <Button
        className='button'
        variant='contained'
        size='large'
        color='success'
        onClick={handleOpen}
      >
        Sign Up
      </Button>
      {/* <Form onClick={handleOpen} /> */}
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default Signup;
