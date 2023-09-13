import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [],
  },  
  reducers: {
    addToWish: (state, action) => {
      const itemInCart = state.wishlist.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
      state.wishlist = removeItem;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const {
  addToWish,
  removeItem
} = wishlistSlice.actions;