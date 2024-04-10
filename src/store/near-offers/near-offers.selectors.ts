import { State } from '../../types/state';
import { TitleSpace } from '../../const';
import { Offer } from '../../types/offer';

export const getNearOffers = (state: State): Offer[] => state[TitleSpace.NearOffers].nearOffers;
export const getNearOffersIsLoading = (state: State): boolean => state[TitleSpace.NearOffers].nearOffersIsLoading;
export const getNearOffersIsNotFound = (state: State): boolean => state[TitleSpace.NearOffers].nearOffersIsNotFound;
