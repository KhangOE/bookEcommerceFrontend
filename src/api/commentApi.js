import { data } from "autoprefixer";
import axiosClient from "./axiosClient";

export const postCommentApi = (data) => {
  const res = axiosClient.post("/api/comment", data);
  return res;
};

export const getCommentByProductIdApi = (data) => {
  const res = axiosClient.get("/api/comment/product/" + data);
  return res;
};
