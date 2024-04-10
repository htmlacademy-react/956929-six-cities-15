import { State } from '../../types/state';
import { TitleSpace } from '../../const';
import { Offer } from '../../types/offer';

export const getFavorites = (state: State): Offer[] => state[TitleSpace.Favorites].favorites;
export const getFavoritesIsLoading = (state: State): boolean => state[TitleSpace.Favorites].favoritesIsLoading;
export const getFavoritesIsNotFound = (state: State): boolean => state[TitleSpace.Favorites].favoritesIsNotFound;
