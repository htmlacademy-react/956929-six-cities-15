import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, defaultLocation, SortType, AuthorizationStatus } from '../const';
import { sortOffers } from '../utils/utils';
import { CityMap } from '../types/city-map';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { UserLogin } from '../types/user';
import {
  setCityActive,
  setChangeMap,
  getSortType,
  setSortOffers,
  loadOffers,
  loadOffer,
  getOffers,
  requireAuthorization,
  setOffersIsLoading,
  setUser,
  setOfferIsLoading,
  setOfferIsNotFound,
  loadNearOffers,
  setNearOffersIsLoading,
  setNearOffersIsNotFound,
  addReviews,
} from './action';

type InitalState = {
  cityActive: string;
  allOffers: Offer[];
  offers: Offer[];
  offer: Offer | null;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
  nearOffers: Offer[];
  nearOffersIsLoading: boolean;
  nearOffersIsNotFound: boolean;
  offersIsLoading: boolean;
  city: CityMap;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  user: UserLogin | null;
  reviews: Review[];
}

const initialState: InitalState = {
  cityActive: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false,
  nearOffers: [],
  nearOffersIsLoading: false,
  nearOffersIsNotFound: false,
  sortType: SortType.Popular,
  offersIsLoading: false,
  city: defaultLocation,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })
    .addCase(getOffers, (state) => {
      if (state.allOffers.length) {
        const offersByCity = state.allOffers.filter((item) => item?.city?.name === state.cityActive);
        state.offers = sortOffers(state.sortType, offersByCity);
      }
    })
    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setSortOffers, (state) => {
      state.offers = sortOffers(state.sortType, state.offers);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersIsLoading, (state, action) => {
      state.offersIsLoading = action.payload;
    })
    .addCase(setOfferIsLoading, (state, action) => {
      state.offerIsLoading = action.payload;
    })
    .addCase(setOfferIsNotFound, (state, action) => {
      state.offerIsNotFound = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setNearOffersIsLoading, (state, action) => {
      state.nearOffersIsLoading = action.payload;
    })
    .addCase(setNearOffersIsNotFound, (state, action) => {
      state.nearOffersIsNotFound = action.payload;
    })
    .addCase(addReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
