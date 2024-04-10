import { useNavigate } from 'react-router';
import { getAuthorizationStatus } from '../store/user/user.selectors';
import { setFavoritesAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from './index';
import { AppRoute, AuthorizationStatus, FavoritesUpdateSource} from '../const';

export const useUpdateFavorites = (
  offerId: string,
  status: number,
  favoritesUpdateSource: FavoritesUpdateSource
) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function onChangeFavorites() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoritesAction({ offerId, status, favoritesUpdateSource }));
  }

  return onChangeFavorites;
};
