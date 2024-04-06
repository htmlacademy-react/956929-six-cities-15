import { useNavigate } from 'react-router';
import { getAuthorizationStatus } from '../store/user-process/user-process.selectors';
import { setFavoritesAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from './index';
import { AppRoute, AuthorizationStatus, FavoritesUpdate} from '../const';

export const useFavorites = (
  offerId: string,
  status: number,
  favoritesUpdate: FavoritesUpdate
) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function onChangeFavorites() {

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoritesAction({ offerId, status, favoritesUpdate }));
  }

  return onChangeFavorites;
};
