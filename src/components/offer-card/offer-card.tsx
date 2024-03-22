import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Offer } from '../../types/offer';
import { countStars } from '../../utils/utils';


type PlaceCardProps = {
  offerCard: Offer;
  setCardOfferHoverId(id: string | null): void;
}


export default function OfferCard({offerCard, setCardOfferHoverId}:PlaceCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offerCard;
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  const handleMouseOver = () => {
    setCardOfferHoverId(id);
  };

  const handleMouseOut = () => {
    setCardOfferHoverId(null);
  };

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button onClick={() => setIsFavoriteCard(!isFavoriteCard)}
            className={`place-card__bookmark-button button ${isFavoriteCard ? 'place-card__bookmark-button--active' : '' }`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${countStars(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
