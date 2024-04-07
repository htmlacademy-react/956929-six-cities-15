import { store } from '../store/index';
import { Offer } from './offer';
import { Review } from './review';
import { City } from './city';
import { SortType, AuthorizationStatus } from '../const';
import { UserLogin } from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferStatus = {
  offer: Offer | null;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
};

export type OffersStatus = {
    cityActive: string;
    city: City;
    sortType: SortType;
    allOffers: Offer[];
    offers: Offer[];
    offersIsLoading: boolean;
    offersIsNotFound: boolean;
  };


export type ReviewsStatus = {
    reviews: Review[];
    reviewsIsLoading: boolean;
    reviewsIsNotFound: boolean;
  };

export type NearOffersStatus = {
    nearOffers: Offer[];
    nearOffersIsLoading: boolean;
    nearOffersIsNotFound: boolean;
  };

export type UserStatus = {
    user: UserLogin | null;
    authorizationStatus: AuthorizationStatus;
  };

export type FavoritesStatus = {
    favorites: Offer[];
    favoritesIsLoading: boolean;
    favoritesIsNotFound: boolean;
  };
