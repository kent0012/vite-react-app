import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../../constants/constants";
const initialState = productList;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productSlice.reducer;
