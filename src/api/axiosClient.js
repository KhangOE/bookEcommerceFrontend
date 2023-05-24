import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://bookecommercebackend.onrender.com",
});

export default axiosClient;
