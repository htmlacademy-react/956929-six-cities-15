import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
    offersList: Offer;
}

export default function OffersCardList({offersList}:OffersCardListProps):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">

      {offersList.map((offer) => (
        <OfferCard offerCard={offer} />
      ))}

    </div>
  );
}
