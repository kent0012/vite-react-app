import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product_id, quantity } = action.payload; // ✅ Accept quantity
      const existingProduct = state.find(
        (item) => item.product_id === product_id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity; // ✅ Add the specified quantity
      } else {
        state.push({ product_id, quantity }); // ✅ Use provided quantity
      }
    },
    updateQuantity: (state, action) => {
      const { product_id, quantity } = action.payload;
      const existingProduct = state.find(
        (item) => item.product_id === product_id
      );
      if (existingProduct) {
        existingProduct.quantity = quantity; // ✅ Update quantity
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.product_id !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
