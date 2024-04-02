import { createReducer } from '@reduxjs/toolkit';
import { setCityActive, getOffers, setChangeMap, getSortType, setSortOffers, loadOffers, requireAuthorization, setUser } from './action';
import { DEFAULT_CITY, defaultLocation, SortType, AuthorizationStatus } from '../const';
import { sortOffers } from '../utils/utils';
import { CityMap } from '../types/city-map';
import { Offer } from '../types/offer';
import { UserLogin } from '../types/user';

type InitalState = {
  cityActive: string;
  allOffers: Offer[];
  offers: Offer[];
  offersIsLoading: boolean;
  city: CityMap;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  user: UserLogin | null;
  isFavorite: boolean;
}

const initialState: InitalState = {
  cityActive: DEFAULT_CITY,
  city: defaultLocation,
  sortType: SortType.Popular,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isFavorite: false,
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
    });
});
