import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Header from '../../components/header/header';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/index';
import Sort from '../../components/sort/sort.tsx';

type MainProps = {
  citiesList: string[];
};

export default function MainPage({citiesList}: MainProps): JSX.Element {
  const [cardOfferHoverId, setCardOfferHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector((state) => state.cityActive);
  const offersActive = useAppSelector((state) => state.offers);
  const cityMapActive = useAppSelector((state) => state.city);
  const filterCityOffers = offersActive.filter((offer) => offer.city.name === cityActive);
  const placesCount = filterCityOffers.length;

  return (
    <div className="page page--gray page--main">

      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationsList cities = {citiesList} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {cityActive}</b>

              <Sort />
              <OffersCardList offersList={filterCityOffers} setCardOfferHoverId={setCardOfferHoverId} />

            </section>
            <div className="cities__right-section">
              <Map mapСlassName={'cities'} offers={filterCityOffers} city={cityMapActive} cardActiveId={cardOfferHoverId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}


