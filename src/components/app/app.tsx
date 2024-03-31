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
  placesToStay: number;
  offers: Offer[];
  reviews: Review[];
};

export default function App({placesToStay, offers, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage placesToStay={placesToStay} offers={offers} />}
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

