import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import { Review } from '../../types/review';

type ReviewsCardListProps = {
    reviewsList: Review;
}

export default function ReviewsCardList({reviewsList}: ReviewsCardListProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      { reviewsList.map((review) => (
        <ReviewCard key={review.id} reviewCard={review} />
      ))}
      <ReviewForm />
    </section>
  );
}

