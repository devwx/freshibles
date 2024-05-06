import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      state.totalPrice = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
