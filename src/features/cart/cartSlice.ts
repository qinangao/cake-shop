import { createSlice } from "@reduxjs/toolkit";
import { CakeSize } from "../../data";

export type CartItem = {
  cakeId: number; // cake id
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
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.cakeId === newItem.cakeId && item.size === newItem.size
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
      } else {
        state.cart.push(newItem);
      }
    },
    deleteItem(state, action) {
      //payload:pizzaId
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.cakeId === action.payload.cakeId &&
            item.size === action.payload.size
          )
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state: stateType) => state.cart.cart;
export const getTotalCartPrice = (state: stateType) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartQuantity = (state: stateType) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id: number) => (state: stateType) =>
  state.cart.cart.find((item) => item.cakeId === id)?.quantity ?? 0;

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
