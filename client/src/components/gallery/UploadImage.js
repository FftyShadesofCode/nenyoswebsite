import React, { useState } from "react";
import { Button, FormGroup } from "reactstrap";
// import { motion } from "framer-motion";
// import ProgressBar from "./ProgressBar";
// import graphic from "../../icons/image-files.svg";
import Dropzone from "../Dropzone";
import axiosWithAuth from "../../api/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import "../../CSS Files/pages/Uploader.css";

const initialValues = {
  nickname: "",
  species: "",
  h20_freq: "",
  light_conditions: "",
  user_id: localStorage.id,
};

export default function UploadImage({ setReload }) {
  const type = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
  const [values, setValues] = useState({
    file: "",
    formData: new FormData(),
    error: "",
  });
  const [values2, setValues2] = useState(initialValues);
  const navigate = useNavigate();
  const { file, formData, error } = values;

  const handleChange = (e) => {
    const value = e.target.files[0];
    if (!type.includes(value.type)) {
      setValues({
        ...values,
        error: "Invalid File Format",
      });
    }
    if (value && type.includes(value.type)) {
      setValues({
        ...values,
        file: value,
      });
      formData.set("image", value);
    }
  };

  const handleChange2 = (e) => {
    setValues2({ ...values2, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/uploader/plants", values)
      .then((resp) => {
        navigate("/plants");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <form className='form-container login-form' onSubmit={handleAdd}>
      <div className='form-title'>
        <h1>Add your Plants</h1>
      </div>
      <FormGroup className='form-group'>
        <div className='username-input form-spacing'>
          <input
            placeholder='  Name/Nickname'
            name='nickname'
            type='text'
            onChange={handleChange2}
          />
        </div>
        <div className='password-input form-spacing'>
          <input
            placeholder='  Species'
            name='species'
            type='text'
            onChange={handleChange2}
          />
        </div>
        <div className='password-input form-spacing'>
          <input
            placeholder='  Water Frequency'
            name='h20_freq'
            type='text'
            onChange={handleChange2}
          />
        </div>
        <div className='password-input form-spacing'>
          <input
            placeholder='  Light Conditions'
            name='light_conditions'
            type='text'
            onChange={handleChange2}
          />
        </div>
        {/* <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            id='bold'
            height='100'
            width='100'
            src={graphic}
          />
          <label>
            <input
              onChange={(e) => handleChange(e)}
              type='file'
              placeholder='Choose File'
            />
          </label>
          {file && (
            <ProgressBar
              setReload={setReload}
              values={values}
              setValues={setValues}
            />
          )} */}
        {error && <h1 className='error'>{error}</h1>}
        <Dropzone />
        <div className='submit'>
          <Button id='submit-login'>Submit</Button>
        </div>
      </FormGroup>
    </form>
  );
}
