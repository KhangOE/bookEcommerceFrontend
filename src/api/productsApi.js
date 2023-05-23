import axiosClient from "./axiosClient";

export const getProductApi = (props) => {
  return axiosClient.get(`/api/product/`, {
    params: {
      filter: props,
      foo: "123",
    },
  });
};
export const getProducByIdtApi = (id) => {
  return axiosClient.get(`/api/product/` + id);
};
export const deleteProductApi = (productId) => {
  return axiosClient.delete(`/api/product/${productId}`);
};

export const postProductApi = (data) => {
  return axiosClient.post("/api/product", data);
};
