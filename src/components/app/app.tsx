import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritePage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getOffersIsLoading } from '../../store/offers-process/offers-process.selectors';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritePage />
              </PrivateRoute>
            }

          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

