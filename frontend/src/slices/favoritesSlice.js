import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesItems: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const item = action.payload;

      const existItem = state.favoritesItems.find((x) => x._id === item._id);

      if (!existItem) {
        state.favoritesItems = [...state.favoritesItems, item];
      }

      localStorage.setItem('favorites', JSON.stringify(state.favoritesItems));
    },
    removeFromFavorites: (state, action) => {
      state.favoritesItems = state.favoritesItems.filter(
        (x) => x._id !== action.payload
      );

      localStorage.setItem('favorites', JSON.stringify(state.favoritesItems));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
