import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, MAX_REVIEWS_COUNT } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type ReviewsCardListProps = {
    reviewsList: Review[];
    offerId?: string;
}

export default function ReviewsCardList({reviewsList, offerId}: ReviewsCardListProps):JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const maxReviews = reviewsList.slice(0, Math.min(MAX_REVIEWS_COUNT, reviewsList.length))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span>
      </h2>
      { maxReviews.map((review) => (
        <ReviewCard key={review.id} reviewCard={review}/>
      ))}
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm offerId={offerId} />
      )}
    </section>
  );
}
