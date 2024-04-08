import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../const';
import { getAuthorizationStatus, getUser } from '../../store/user-process/user-process.selectors';
import { getFavorites } from '../../store/favorites-process/favorites-process.selectors';

export default function Login(): JSX.Element {
  const authorizationStatusLogged = useAppSelector(getAuthorizationStatus);
  const isLogged = authorizationStatusLogged === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoritesLength = useAppSelector(getFavorites).length;

  const handleClick = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  return(
    <nav className="header__nav">

      { isLogged ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{user?.email}</span>
              <span className="header__favorite-count">{favoritesLength}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link"
              to={AppRoute.Main}
              onClick={(evt) => {
                evt.preventDefault();
                handleClick();
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
