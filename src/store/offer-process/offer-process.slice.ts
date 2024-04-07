import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleSpace } from '../../const';
import { OfferProcess } from '../../types/state';
import { fetchOfferAction } from '../api-actions';

const initialState: OfferProcess = {
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false,
};

export const offer = createSlice({
  name: TitleSpace.Offer,
  initialState,
  reducers: {
    setFavoriteOffer(state, action: PayloadAction<boolean>) {
      if (state.offer) {
        state.offer.isFavorite = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerIsLoading = true;
        state.offerIsNotFound = false;
      })

      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const offerData = action.payload;

        if (offerData) {
          state.offer = offerData;
        }

        state.offerIsLoading = false;
      })

      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerIsLoading = false;
        state.offerIsNotFound = true;
      });
  },
});

export const { setFavoriteOffer } = offer.actions;
