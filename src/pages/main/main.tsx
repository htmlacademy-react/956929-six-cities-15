import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import LocationList from '../../components/location-list/location-list';
import Spinner from '../../components/spinner/spinner';
import MainEmpty from '../main-empty/main-empty';
import { useAppSelector } from '../../hooks/index';
import { getCityActive, getCity, getOffers, getOffersIsLoading, getOffersIsNotFound } from '../../store/offers/offers.selectors';

export default function MainPage(): JSX.Element {
  const [cardOfferHoverId, setCardOfferHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector(getCityActive);
  const offersActive = useAppSelector(getOffers);
  const cityMapActive = useAppSelector(getCity);
  const placesCount = offersActive.length;
  const offersIsLoading = useAppSelector(getOffersIsLoading);
  const offersIsNotFound = useAppSelector(getOffersIsNotFound);


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': !placesCount,
        })}
      >
        {offersIsLoading && <Spinner />}
        <LocationList cityActive={cityActive} />

        <h1 className="visually-hidden">Cities</h1>
        {offersIsNotFound && <Navigate to={AppRoute.NotFound} />}
        {!offersIsLoading && (
          <div className="cities">
            {placesCount ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesCount > 1 ? `${placesCount} places` : `${placesCount} place`} to stay in {cityActive}</b>
                  <Sort />
                  <OffersCardList offersList={offersActive} setCardOfferHoverId={setCardOfferHoverId} />
                </section>
                <div className="cities__right-section">
                  <Map mapClassName={'cities'} offers={offersActive} city={cityMapActive} cardActiveId={cardOfferHoverId} />
                </div>
              </div>
            ) : (
              <MainEmpty cityActive={cityActive} />
            ) }
          </div>
        )}
      </main>
    </div>
  );
}
