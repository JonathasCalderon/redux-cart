import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], isVisible: false },
  reducers: {
    toggleShowCart(state) {
      state.isVisible = !state.isVisible;
    },
    addItem(state, action) {
      // payload = item to add
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[itemIndex].quantity++;
      }
    },
    removeItem(state, action) {
      // payload = item id
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[itemIndex].quantity--;
      }
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
