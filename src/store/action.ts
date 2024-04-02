import { createAction } from '@reduxjs/toolkit';
import { CityMap } from '../types/city-map';
import { SortType, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

export const setCityActive = createAction('main/setCityActive', (value: string) => ({payload: value}));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
export const setSortOffers = createAction('setSortOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');