import { createSlice } from "@reduxjs/toolkit";
import { CakeSize } from "../../data";

export type CartItem = {
  id: number; // cake id
  name: string;
  totalPrice: number;
  quantity: number;
  size?: CakeSize;
};
type stateType = { cart: { cart: CartItem[] } };

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

export const getCart = (state: stateType) => state.cart.cart;
export const getTotalCartPrice = (state: stateType) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
