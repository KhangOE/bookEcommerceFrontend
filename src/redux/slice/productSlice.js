import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducByIdtApi } from "../../api/productsApi";

const initialState = {
  product: {
    id: null,
    title: "",
    description: "",
    price: null,
    comment: [],
    imageUrl: "",
    author: [],
    category: [],
  },
  loading: false,
  error: false,
};

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    const res = await getProducByIdtApi(id);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addComment(state, action) {
      state.product.comment.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product.id = action.payload.product._id;
      state.product.title = action.payload.product.title;
      state.product.description = action.payload.product.description;
      state.product.comment = action.payload.product.comment;
      state.product.imageUrl = action.payload.product.imageUrl;
      state.product.price = action.payload.product.price;
      state.product.author = action.payload.product.author.map((a) => {
        return a.name;
      });
      state.product.category = action.payload.product.category.map((a) => {
        return a.name;
      });
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { addComment } = productSlice.actions;
export default productSlice.reducer;
