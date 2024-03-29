import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Offer } from '../../types/offer';
import { countStars } from '../../utils/utils';

type FavoritesCardProps = {
  favoritesOffer: Offer;
}


export default function FavoritesCard({favoritesOffer}: FavoritesCardProps): JSX.Element {

  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = favoritesOffer;

  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  return (

    <article className="favorites__card place-card">
      {isPremium === true &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => setIsFavoriteCard(!isFavoriteCard)}
            className={`place-card__bookmark-button button ${isFavoriteCard ? 'place-card__bookmark-button--active' : '' }`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${countStars(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>


  );
}
