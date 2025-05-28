import { createSlice } from "@reduxjs/toolkit";
import { CakeSize } from "../../data";

export type CartItem = {
  cakeId: number; // cake id
  name: string;
  basePrice: number;
  totalPrice: number;
  quantity: number;
  size: CakeSize;
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
      const newItem = { ...action.payload }; // <- Deep clone
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
      //payload:cakeId
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.cakeId === action.payload.cakeId &&
            item.size === action.payload.size
          )
      );
    },
    increaseItemQuantity(state, action) {
      //payload:cakeId
      const selecteditem = state.cart.find(
        (item) =>
          item.cakeId === action.payload.cakeId &&
          item.size === action.payload.size
      );
      if (selecteditem) {
        selecteditem.quantity++;
        selecteditem.totalPrice =
          selecteditem.quantity * selecteditem.basePrice;
      }
    },
    decreaseItemQuantity(state, action) {
      //payload:cakeId
      const selecteditem = state.cart.find(
        (item) =>
          item.cakeId === action.payload.cakeId &&
          item.size === action.payload.size
      );
      if (selecteditem) {
        selecteditem.quantity--;
        selecteditem.totalPrice =
          selecteditem.quantity * selecteditem.basePrice;

        if (selecteditem.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
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

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
