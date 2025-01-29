import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "../feautures/categories/CategorySlice";
import productSliceReducer from "../feautures/products/ProductSlice";
import cartSliceReducer from "../feautures/cart/CartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySliceReducer,
    products: productSliceReducer,
    cart: cartSliceReducer,
  },
});
