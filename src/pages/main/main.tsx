import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Header from '../../components/header/header';
import OffersCardList from '../../components/offers-card-list/offers-card-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/index';

type MainProps = {
  citiesList: string[];
};

export default function MainPage({citiesList}: MainProps): JSX.Element {
  const [cardOfferHoverId, setCardOfferHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector((state) => state.cityActive);
  const offersActive = useAppSelector((state) => state.offers);
  const cityMapActive = useAppSelector((state) => state.city);
  const placesCount = offersActive.length;

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>


              <OffersCardList offersList={offersActive} setCardOfferHoverId={setCardOfferHoverId} />

            </section>
            <div className="cities__right-section">
              <Map mapСlassName={'cities'} offers={offersActive} city={cityMapActive} cardActiveId={cardOfferHoverId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}


