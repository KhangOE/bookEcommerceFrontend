import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProductApi } from "../../api/productsApi";

const initialState = {
  product: [],
  loading: false,
  error: false,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (props) => {
    console.log("getproduct");
    const res = await getProductApi(props);

    return res.data;
  }
);

const loadProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = [...action.payload.products];
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
  },
});

export default loadProductSlice.reducer;
