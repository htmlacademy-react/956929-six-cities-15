import { createSlice } from '@reduxjs/toolkit';
import { TitleSpace } from '../../const';
import { FavoritesStatus } from '../../types/state';
import { fetchFavoritesAction, setFavoritesAction } from '../api-actions';

const initialState: FavoritesStatus = {
  favorites: [],
  favoritesIsLoading: false,
  favoritesIsNotFound: false,
};

export const favorites = createSlice({
  name: TitleSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesIsLoading = true;
        state.favoritesIsNotFound = false;
      })

      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesIsLoading = false;
        state.favoritesIsNotFound = true;
      })


      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const favoriteOfferData = action.payload;

        if (favoriteOfferData.length > 0) {
          state.favorites = favoriteOfferData;
        } else {
          state.favoritesIsNotFound = true;
        }

        state.favoritesIsLoading = false;
      })

      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        const favoriteOfferData = action.payload;
        if (favoriteOfferData?.isFavorite) {
          state.favorites.push(favoriteOfferData);
        } else {
          state.favorites = state.favorites.filter(
            (item) => item.id !== favoriteOfferData.id
          );
        }
      });
  },
});
