import { State } from '../../types/state';
import { TitleSpace } from '../../const';
import { Offer } from '../../types/offer';
import { SortType } from '../../const';
import { City } from '../../types/city';

export const getCityActive = (state: State): string => state[TitleSpace.Offers].cityActive;
export const getOffers = (state: State): Offer[] => state[TitleSpace.Offers].offers;
export const getCity = (state: State): City => state[TitleSpace.Offers].city;
export const getSortType = (state: State): SortType => state[TitleSpace.Offers].sortType;
export const getSortedOffers = (state: State): Offer[] => state[TitleSpace.Offers].offers;
export const getOffersIsLoading = (state: State): boolean => state[TitleSpace.Offers].offersIsLoading;
export const getOffersIsNotFound = (state: State): boolean => state[TitleSpace.Offers].offersIsNotFound;
