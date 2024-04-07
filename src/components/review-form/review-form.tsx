import { useState, ReactEventHandler, Fragment, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { submitCommentAction } from '../../store/api-actions';
import { ReviewRating, MAX_REVIEWS_SYMBOLS, MIN_REVIEWS_SYMBOLS } from '../../const';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type ReviewFormProps = {
  offerId?: string;
};

export default function ReviewForm({ offerId }: ReviewFormProps):JSX.Element {
  const dispatch = useAppDispatch();

  const [review, setReview] = useState({
    rating: 0,
    review: '',
  });

  const isValidReviews =
  review.review.length < MIN_REVIEWS_SYMBOLS ||
  review.review.length > MAX_REVIEWS_SYMBOLS ||
  review.rating === 0;

  const handleFieldChange: TChangeHandler = (evt) => {
    const target = evt.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setReview({ ...review, [name]: value });
  };

  function setRating(value: number): void {
    setReview({ ...review, rating: value });
  }
  function setComment(value: string): void {
    setReview({ ...review, review: value });
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId && !isValidReviews) {
      dispatch(
        submitCommentAction({
          id: offerId,
          comment: review.review,
          rating: Number(review.rating),
        })
      );
    }
    setRating(0);
    setComment('');

  };

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ReviewRating.map(({value, title }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleFieldChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.review}
        onChange={handleFieldChange}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set
          <span className="reviews__star">rating </span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isValidReviews}
        >
          Submit
        </button>
      </div>
    </form>
  );

}
