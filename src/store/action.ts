import { createAction } from '@reduxjs/toolkit';
// import { CityMap } from '../types/city-map';
// import { SortType, AuthorizationStatus, AppRoute, TitleSpace } from '../const';
// import { Offer } from '../types/offer';
// import { Review } from '../types/review';
// import { UserLogin } from '../types/user';

import { AppRoute } from '../const';

// export const setCityActive = createAction('main/setCityActive', (value: string) => ({payload: value}));
// export const getOffers = createAction('main/getOffers');
// export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
// export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
// export const setSortOffers = createAction('setSortOffers');
// export const loadOffers = createAction<Offer[]>('data/loadOffers');
// export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
// export const setUser = createAction<UserLogin | null>(`${TitleSpace.User}/setUser`);
// export const loadOffer = createAction<Offer | null>('data/loadOffer');
// export const setOfferIsLoading = createAction<boolean>('setOfferIsLoading');
// export const setOfferIsNotFound = createAction<boolean>('setOfferIsNotFound');
// export const loadNearOffers = createAction<Offer[]>('data/loadNearOffers');
// export const setNearOffersIsLoading = createAction<boolean>('data/setNearOffersIsLoading');
// export const setNearOffersIsNotFound = createAction<boolean>('data/setNearOffersIsNotFound');
// export const addReviews = createAction<Review[]>('data/addReviews');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
