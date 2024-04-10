import {Review} from '../../types/review';
import {countStars, formatDate} from '../../utils/utils';

type ReviewProps = {
  reviewCard: Review;
};

export default function ReviewCard({reviewCard}: ReviewProps): JSX.Element {
  const {user, comment, rating, date} = reviewCard;
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl}
            width="54" height="54" alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${countStars(rating)}`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}
