import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk("shop/fetchProducts", () =>
  fetch(baseURL)
    .then((res) => res.json())
    .then((json) => json)
    .catch((error) => error)
);

const initialState = {
  products: [],
  loading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default shopSlice.reducer;
