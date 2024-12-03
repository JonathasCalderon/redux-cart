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
        const newItem = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price
        }
        state.cartItems = [
          ...state.cartItems,
          newItem
        ]
      } else {
        state.cartItems[itemIndex].quantity++;
        state.cartItems[itemIndex].total += state.cartItems[itemIndex].price;
      }
    },
    removeItem(state, action) {
      // payload = item id
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].quantity--;
          state.cartItems[itemIndex].total -= state.cartItems[itemIndex].price;
        }
      }
    },
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
