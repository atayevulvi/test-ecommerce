import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWish: (state, action) => {
      const itemInWish = state.wishlist.find((item) => item.id === action.payload);
      if (itemInWish) {
        const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
        state.wishlist = removeItem;
      } else {
        state.wishlist.push({ ...action.payload });
      }
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const {
  addToWish
} = wishlistSlice.actions;