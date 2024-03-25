import { Link } from 'react-router-dom';

import FavoritesCard from '../../components/favorities-card/favorities-card';
import { Offer } from '../../types/offer';

type PlacesOffersProps = {
  favoritiesOffers: Offer[];
  name: string;
};

export default function FavoritesCardList({favoritiesOffers, name}: PlacesOffersProps): JSX.Element {

  const cardsOffersFavorities = favoritiesOffers.map((offer) => <FavoritesCard key={offer.id} favoritesOffer={offer} />);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to='/'>
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cardsOffersFavorities}
      </div>
    </li>
  );
}
