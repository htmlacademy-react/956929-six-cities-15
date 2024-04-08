import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Offer } from '../../types/offer';
import { countStars, uppercaseFirst } from '../../utils/utils';
import { useUpdateFavorites } from '../../hooks/use-update-favorites';
import { FavoritesUpdateSource } from '../../const';

type PlaceCardProps = {
  className: 'cities' | 'near-places';
  offerCard: Offer;
  setCardOfferHoverId?(id: string | null): void;
  favoritesUpdateSource: FavoritesUpdateSource;
}

export default function OfferCard({className, offerCard, setCardOfferHoverId, favoritesUpdateSource}:PlaceCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offerCard;

  const handleMouseOver = () => {
    setCardOfferHoverId?.(id);
  };

  const handleMouseOut = () => {
    setCardOfferHoverId?.(null);
  };

  const currentStatus = offerCard.isFavorite ? 0 : 1;

  const onChangeFavorites = useUpdateFavorites(
    String(offerCard.id),
    currentStatus,
    favoritesUpdateSource
  );

  return (
    <article className={`${className}__card place-card`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
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
          <button onClick={onChangeFavorites}
            className={classNames('place-card__bookmark-button', 'button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
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
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{uppercaseFirst(type)}</p>
      </div>
    </article>
  );
}
