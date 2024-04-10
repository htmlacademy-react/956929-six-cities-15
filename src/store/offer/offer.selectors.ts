import { State } from '../../types/state';
import { TitleSpace } from '../../const';
import { Offer } from '../../types/offer';

export const getOffer = (state: State): Offer | null => state[TitleSpace.Offer].offer;
export const getOfferIsLoading = (state: State): boolean => state[TitleSpace.Offer].offerIsLoading;
export const getOfferIsNotFound = (state: State): boolean => state[TitleSpace.Offer].offerIsNotFound;
