import { CityMap } from './types/city-map';
import { CityList, City } from './types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const LOCATIONS: CityList = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const cityMap: CityMap[] = [
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 12,
  },
  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12
  },
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 12
  },
  {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 12
  },
  {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 12
  },
  {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 12
  },
];

export const URL_MARKER_DEFAULT = './public/img/pin.svg';

export const URL_MARKER_CURRENT = './public/img/pin-active.svg';

export const MAX_NEAR_SHOW = 3;

export const MAX_REVIEWS_COUNT = 10;

export const citiesList = Object.values(LOCATIONS);

export const DEFAULT_CITY = LOCATIONS.Paris;

export const DEFAULT_LOCATION: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
} as const;

export const [defaultLocation] = cityMap.filter((item) => item.title === DEFAULT_CITY);

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const DEFAULT_SORT = SortType.Popular;

export enum ApiRoute {
  Favorite = '/favorite',
  Offers = '/offers',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout'
}

export enum TitleSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  User = 'USER',
  Reviews = 'REVIEWS',
  NearOffers = 'NEAROFFERS',
  Favorites = 'FAVORITES',
  Error = 'ERROR'
}


export enum FavoriteUpdate {
  Offers = 'UpdateOffers',
  Offer = 'UpdateOffer',
  Favorites = 'UpdateFavorites',
  NearOffers = 'UpdateNearOffers',
}

export const ReviewRating = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

export const MAX_REVIEWS_SYMBOLS = 300;

export const MIN_REVIEWS_SYMBOLS = 50;

export enum FavoritesUpdate {
  Offers = 'UpdateOffers',
  Offer = 'UpdateOffer',
  Favorites = 'UpdateFavorites',
  NearOffers = 'UpdateNearOffers',
}
