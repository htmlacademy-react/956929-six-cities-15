import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritePage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';

import PrivateRoute from '../private-route/private-route';

import { Offer } from '../../types/offer';
import { Review } from '../../types/review';


type AppProps = {
  offers: Offer[];
  reviews: Review[];
  citiesList: string[];
};

export default function App({offers, reviews, citiesList}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesList={citiesList} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritePage offers={offers} />
              </PrivateRoute>
            }

          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} reviews={reviews} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

