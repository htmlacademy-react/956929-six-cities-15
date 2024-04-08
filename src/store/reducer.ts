
import { combineReducers } from '@reduxjs/toolkit';
import { TitleSpace } from '../const';
import { offers } from './offers-process/offers-process.slice';
import { offer } from './offer-process/offer-process.slice';
import { reviews } from './reviews-process/reviews-process.slice';
import { nearOffers } from './near-offers-process/near-offers-process.slice';
import { user } from './user-process/user-process.slice';
import { favorites } from './favorites-process/favorites-process.slice';

export const rootReducer = combineReducers({
  [TitleSpace.Offers]: offers.reducer,
  [TitleSpace.Offer]: offer.reducer,
  [TitleSpace.User]: user.reducer,
  [TitleSpace.Reviews]: reviews.reducer,
  [TitleSpace.NearOffers]: nearOffers.reducer,
  [TitleSpace.Favorites]: favorites.reducer,
});
