import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { FavoritesUpdate } from '../../const';

type NearPlaceCardListProps = {
    offerList: Offer[];
}

export default function NearOfferCardList({offerList}: NearPlaceCardListProps): JSX.Element {
  return (
    <>
      {offerList.map((offer) => (
        <OfferCard key={offer.id} className={'near-places'} offerCard={offer} favoritesUpdate={FavoritesUpdate.NearOffers} />
      ))}
    </>
  );
}
