
import { combineReducers } from '@reduxjs/toolkit';
import { TitleSpace } from '../const';
import { offers } from './offers/offers.slice';
import { offer } from './offer/offer.slice';
import { reviews } from './reviews/reviews.slice';
import { nearOffers } from './near-offers/near-offers.slice';
import { user } from './user/user.slice';
import { favorites } from './favorites/favorites.slice';

export const rootReducer = combineReducers({
  [TitleSpace.Offers]: offers.reducer,
  [TitleSpace.Offer]: offer.reducer,
  [TitleSpace.User]: user.reducer,
  [TitleSpace.Reviews]: reviews.reducer,
  [TitleSpace.NearOffers]: nearOffers.reducer,
  [TitleSpace.Favorites]: favorites.reducer,
});
