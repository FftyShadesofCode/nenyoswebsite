import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "", // Endpoint URL goes here. I think???
  });
};

export default axiosWithAuth;
