import { useState, ReactEventHandler, Fragment } from 'react';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export default function ReviewForm():JSX.Element {

  const reviewRating = [
    { value: '5', title: 'perfect' },
    { value: '4', title: 'good' },
    { value: '3', title: 'not bad' },
    { value: '2', title: 'badly' },
    { value: '1', title: 'terribly' },
  ];

  const [review, setReview] = useState({
    rating: 0,
    review: '',
  });

  const isValidReviews =
  review.review.length < 50 ||
  review.rating === 0;

  const handleFieldChange: TChangeHandler = (e) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;
    setReview({ ...review, [name]: value });
  };


  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {reviewRating.map(({value, title }) => (
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
        >Submit
        </button>
      </div>
    </form>
  );

}
