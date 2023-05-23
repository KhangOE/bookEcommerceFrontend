import axiosClient from "./axiosClient";
import AxiosClient from "./axiosClient";
export const createOderApi = (data) => {
  const res = AxiosClient.post("/api/oder", data);
  return res;
};

export const getOdersApi = () => {
  const res = axiosClient.get("/api/oder");
  return res;
};
