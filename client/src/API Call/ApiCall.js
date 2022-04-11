import axios from "axios";
import { startLogin, successLogin, failedLogin } from "../actions/Actions";

export const ApiCall = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post("auth/login", userCredentials);
    dispatch(successLogin(user.data));
    console.log(user.data);
  } catch (err) {
    dispatch(failedLogin(err));
    console.log(err);
  }
};
