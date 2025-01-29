import { createSlice } from "@reduxjs/toolkit";

import { categoryList } from "../../constants/constants";

const initialState = categoryList;

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectCategories = (state) => state.categories;

export default categorySlice.reducer;
