import axiosClient from "./axiosClient";

export const getCategoryApi = () => {
  const res = axiosClient.get("/api/category");
  return res;
};

export const postCategoryApi = (data) => {
  const res = axiosClient.post("/api/category", data);
  return res;
};
