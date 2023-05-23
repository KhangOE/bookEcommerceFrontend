import { data } from "autoprefixer";
import axiosClient from "./axiosClient";

export const getAuthorApi = () => {
  const res = axiosClient.get("api/author");
  return res;
};

export const postAuthorAPi = (data) => {
  const res = axiosClient.post("api/author", data);
  return res;
};
