import { configureStore } from "@reduxjs/toolkit";
import loadProductSlice from "./slice/loadProductSlice";
import authSlice from "./slice/authSlide";
import productSlice from "./slice/productSlice";
import commentSlice from "./slice/commentSlice";
export const store = configureStore({
  reducer: {
    loadProduct: loadProductSlice,
    auth: authSlice,
    comment: commentSlice,
    product: productSlice,
  },
});
