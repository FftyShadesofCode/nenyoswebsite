import React from "react";
import Button from "@mui/material";
import ModalDialog from "../components/ModalDialog";

function Signup() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Sign Up
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default Signup;
