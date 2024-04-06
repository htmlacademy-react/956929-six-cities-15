import { store } from '../store/index';
import { Offer } from './offer';
import { Review } from './review';
import { City } from './city';
import { SortType, AuthorizationStatus } from '../const';
import { UserLogin } from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersProcess = {
    cityActive: string;
    city: City;
    sortType: SortType;
    allOffers: Offer[];
    offers: Offer[];
    offersIsLoading: boolean;
    offersIsNotFound: boolean;
  };

export type OfferProcess = {
    offer: Offer | null;
    offerIsLoading: boolean;
    offerIsNotFound: boolean;
  };

export type ReviewsProcess = {
    reviews: Review[];
    reviewsIsLoading: boolean;
    reviewsIsNotFound: boolean;
  };

export type NearOffersProcess = {
    nearOffers: Offer[];
    nearOffersIsLoading: boolean;
    nearOffersIsNotFound: boolean;
  };

export type UserProcess = {
    user: UserLogin | null;
    authorizationStatus: AuthorizationStatus;
  };
