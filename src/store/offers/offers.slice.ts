import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleSpace, SortType, DEFAULT_CITY, DEFAULT_LOCATION, DEFAULT_SORT } from '../../const';
import { OffersStatus } from '../../types/state';
import { fetchOffersAction } from '../api-actions';
import { sortOffers } from '../../utils/utils';
import { Offer } from '../../types/offer';

const initialState: OffersStatus = {
  cityActive: DEFAULT_CITY,
  city: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

export const offers = createSlice({
  name: TitleSpace.Offers,
  initialState,
  reducers: {
    setCityActive(state, action: PayloadAction<string>) {
      state.cityActive = action.payload;
    },

    getOffers(state) {
      if (state.allOffers.length) {
        const offersByCity = state.allOffers.filter(
          (item) => item?.city?.name === state.cityActive
        );
        state.offers = sortOffers(state.sortType, offersByCity);
      }
    },

    setChangeMap(state) {
      const cityMapActive = state.offers[0].city;
      state.city = cityMapActive;
    },

    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },

    setFavoritesOffers(state, action: PayloadAction<Offer>) {
      const favoriteOffer = action.payload;

      state.offers = state.offers.map((item: Offer) => item.id === favoriteOffer.id ? favoriteOffer : item);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersIsLoading = true;
        state.offersIsNotFound = false;
      })

      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersIsLoading = false;
        state.offersIsNotFound = true;
      })

      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.allOffers = action.payload;
        state.offersIsLoading = false;

        offers.caseReducers.getOffers(state);
      });
  },
});

export const { getOffers, setCityActive, setSortType, setChangeMap, setFavoritesOffers } = offers.actions;
