import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommentByProductIdApi, postCommentApi } from "../../api/commentApi";

const initialState = {
  comment: [],
  loading: false,
  error: false,
};

export const getCommentByProductId = createAsyncThunk(
  "comment/product:id",
  async (id) => {
    const res = await getCommentByProductIdApi(id);
    return res.data;
  }
);

export const postComment = createAsyncThunk("post/comment", async (data) => {
  const res = await postCommentApi(data);
  return res.data;
});
const productSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentByProductId.fulfilled, (state, action) => {
      state.comment = action.payload.comments;
      state.loading = false;
    });
    builder.addCase(getCommentByProductId.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(getCommentByProductId.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postComment.fulfilled, (state, action) => {
      state.comment.push(action.payload.comment);
      state.loading = false;
    });
    builder.addCase(postComment.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(postComment.pending, (state) => {
      state.loading = true;
    });
  },
});

export default productSlice.reducer;
