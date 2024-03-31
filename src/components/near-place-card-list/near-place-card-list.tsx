import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type NearPlaceCardListProps = {
    offerList: Offer[];
}

export default function NearOfferCardList({offerList}: NearPlaceCardListProps): JSX.Element {
  return (
    <>
      {offerList.map((offer) => (
        <OfferCard key={offer.id} className={'near-places'} offerCard={offer} />
      ))}
    </>
  );
}
