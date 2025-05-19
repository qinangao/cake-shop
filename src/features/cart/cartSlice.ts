import { createSlice } from "@reduxjs/toolkit";
import { CakeSize } from "../../data";

export type CartItem = {
  id: number; // cake id
  name: string;
  price: number;
  quantity: number;
  size?: CakeSize;
};

const initialState: { cart: CartItem[] } = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload:newItem
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
