import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesCardList from '../../components/favorities-card-list/favorities-card-list';

import { Offer } from '../../types/offer';
import { LOCATIONS } from '../../const';


type FavoritesProps = {
  offers: Offer;
}

export default function FavoritesPage({offers}: FavoritesProps): JSX.Element {

  const favoritesCard = offers.filter((offer) => offer.isFavorite === true);

  const locationsList = Object.keys(LOCATIONS).map((locationName) => {
    const currentOfferLocations = favoritesCard.filter((card) => card.city.name === locationName);

    if(currentOfferLocations.length > 0){
      return <FavoritesCardList key={locationName} favoritiesOffers={currentOfferLocations} name={locationName}/>;
    }
  });


  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {locationsList}

            </ul>
          </section>
        </div>
      </main>

      <Footer />

    </div>
  );

}


