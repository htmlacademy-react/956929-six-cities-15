import { Review } from '../../types/review';
import { countStars } from '../../utils/utils';


type ReviewProps = {
    reviewCard: Review;
    counter: number;
};

export default function ReviewCard({reviewCard, counter}: ReviewProps):JSX.Element {

  const { user, comment, rating, date } = reviewCard;
  const { name, avatarUrl } = user;

  return (
    <div>
      <h2 className="reviews__title">
        Reviews &middot;<span className="reviews__amount">{++counter}</span>
      </h2>

      <ul className="reviews__list">
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
            <time className="reviews__time" dateTime="2019-04-24">{date}</time>
          </div>
        </li>
      </ul>
    </div>
  );
}
