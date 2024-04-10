import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, MAX_REVIEWS_COUNT} from '../../const';
import {getAuthorizationStatus} from '../../store/user/user.selectors';

type ReviewsCardListProps = {
  reviewsList: Review[];
  offerId?: string;
}

export default function ReviewsCardList({reviewsList, offerId}: ReviewsCardListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const sortedComments = [...reviewsList].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const newComments = sortedComments.slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span>
      </h2>
      <ul className="reviews__list">
        {newComments.map((review) => (
          <ReviewCard key={review.id} reviewCard={review}/>
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm offerId={offerId}/>
      )}
    </section>
  );
}
