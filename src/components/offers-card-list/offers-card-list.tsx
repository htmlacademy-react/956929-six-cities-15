import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { FavoritesUpdate } from '../../const';

type OffersCardListProps = {
    offersList: Offer[];
    setCardOfferHoverId(id: string | null): void;
}

export default function OffersCardList({offersList, setCardOfferHoverId }:OffersCardListProps):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">

      {offersList.map((offer) => (
        <OfferCard key={offer.id} className={'cities'} offerCard={offer} setCardOfferHoverId={setCardOfferHoverId} favoritesUpdate={FavoritesUpdate.Offers} />
      ))}

    </div>
  );
}
