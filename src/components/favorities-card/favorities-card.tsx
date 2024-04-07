import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { countStars, ucFirst } from '../../utils/utils';
import { useFavorites } from '../../hooks/use-favorites';
import { FavoritesUpdate } from '../../const';

type FavoritesCardProps = {
  card: Offer;
}

export default function FavoritesCard({card}: FavoritesCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = card;
  const currentStatus = card && isFavorite ? 0 : 1;
  const onChangeFavorites = useFavorites(
    String(id),
    currentStatus,
    FavoritesUpdate.Favorites
  );

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
          <button
            onClick={onChangeFavorites}
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : '' }`}
            type="button"
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
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>
  );
}
