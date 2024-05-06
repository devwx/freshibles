import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartItemSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});
