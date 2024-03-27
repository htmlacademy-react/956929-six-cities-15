import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import ReviewsCardList from '../../components/reviews-card-list/reviews-card-list';
import NearPlaceCardList from '../../components/near-place-card-list/near-place-card-list';
import Map from '../../components/map/map';

import { countStars } from '../../utils/utils';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { city } from '../../mocks/city';
import { MAX_NEAR_SHOW } from '../../const';

type OfferProps = {
  offers: Offer[];
  reviews: Review[];
};


export default function OfferPage({offers, reviews}: OfferProps): JSX.Element {

  const params = useParams();
  const offerId = params.id;
  const selectedOffer = offers.filter((offer) => offer.id === offerId)[0];
  const otherOffers = offers.filter((offer) => offer.id !== selectedOffer?.id).slice(0, MAX_NEAR_SHOW);
  const { id, images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host , description } = selectedOffer;
  const { avatarUrl, hostName, isPro } = host;

  const [ isFavoriteOffer, setIsFavoriteOffer ] = useState(isFavorite);

  return (
    <div className="page">

      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((url, count) => {
                const keyValue = `${count}-${url}`;
                return (
                  <div key={keyValue} className="offer__image-wrapper">
                    <img className="offer__image" src={url} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
               <div className="offer__mark">
                 <span>Premium</span>
               </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button onClick={() => setIsFavoriteOffer(!isFavoriteOffer)}
                  className={`offer__bookmark-button button ${isFavoriteOffer && 'offer__bookmark-button--active' }`} type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${countStars(rating)}`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">

                  {goods.map((good) => (<li key={good} className="offer__inside-item">{good}</li>))}

                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper"
                  >
                    <img className="offer__avatar user__avatar" src={avatarUrl}
                      width="74" height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{hostName}</span>
                  <span className="offer__user-status">{isPro && 'Pro'}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsCardList reviewsList={reviews} />
            </div>
          </div>


          <section className="offer__map map">
            <Map mapType={'offer'} offers={offers} city={city} cardActiveId={id} />
          </section>


        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <NearPlaceCardList offerList={otherOffers} />

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
