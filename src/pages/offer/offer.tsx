import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOfferAction, fetchReviewsAction, fetchNearOffersAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import ReviewsCardList from '../../components/reviews-card-list/reviews-card-list';
import NearPlaceCardList from '../../components/near-place-card-list/near-place-card-list';
import Map from '../../components/map/map';
import NotFound from '../not-found/not-found';
import Spinner from '../../components/spinner/spinner';
import { countStars, uppercaseFirst } from '../../utils/utils';
import { MAX_NEAR_SHOW, } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { getCity } from '../../store/offers/offers.selectors';
import { getOffer, getOfferIsNotFound, getOfferIsLoading } from '../../store/offer/offer.selectors';
import { getReviews } from '../../store/reviews/reviews.selectors';
import { getNearOffers, getNearOffersIsLoading } from '../../store/near-offers/near-offers.selectors';
import { useUpdateFavorites } from '../../hooks/use-update-favorites';
import { FavoritesUpdateSource, MAX_IMAGE_COUNT } from '../../const';

export default function OfferPage(): JSX.Element {
  const cityMapActive = useAppSelector(getCity);
  const params = useParams();
  const offerId = params.id;
  const selectedOffer = useAppSelector(getOffer);
  const offerIsNotFound = useAppSelector(getOfferIsNotFound);
  const offerIsLoading = useAppSelector(getOfferIsLoading);
  const reviewsActive = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers);
  const nearOffersIsLoading = useAppSelector(getNearOffersIsLoading);
  const activeNearOffers = nearOffers.slice(0, Math.min(MAX_NEAR_SHOW, nearOffers.length));
  const nearOfferSelectedCard = [...activeNearOffers];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearOffersAction(offerId));
  }, [offerId, dispatch]);

  const currentStatus = selectedOffer && selectedOffer.isFavorite ? 0 : 1;

  const onChangeFavorites = useUpdateFavorites(
    String(offerId),
    currentStatus,
    FavoritesUpdateSource.Offer
  );

  if (offerIsNotFound) {
    return (<NotFound />);
  }

  if(selectedOffer) {
    nearOfferSelectedCard.push(selectedOffer);
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header/>
      <main className="page__main page__main--offer">
        {offerIsLoading && <Spinner />}
        {selectedOffer &&
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {selectedOffer.images?.length > 0 &&
                  selectedOffer.images.slice(0, Math.min(MAX_IMAGE_COUNT, selectedOffer.images.length))
                    .map((url, count) => {
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
                {selectedOffer.isPremium &&
               <div className="offer__mark">
                 <span>Premium</span>
               </div>}

                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {selectedOffer.title}
                  </h1>
                  <button
                    onClick={onChangeFavorites}
                    className={`offer__bookmark-button button ${selectedOffer.isFavorite && 'offer__bookmark-button--active' }`}
                    type="button"
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${countStars(selectedOffer.rating)}`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {uppercaseFirst(selectedOffer.type)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {selectedOffer.bedrooms > 1 ? `${selectedOffer.bedrooms} Bedrooms` : `${selectedOffer.bedrooms} Bedroom`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    {selectedOffer.maxAdults > 1 ? `Max ${selectedOffer.maxAdults} adults` : `Max ${selectedOffer.maxAdults} adult`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {selectedOffer.goods.map((good) => (<li key={good} className="offer__inside-item">{good}</li>))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  {selectedOffer.host &&
                    <div className="offer__host-user user">
                      {selectedOffer.host?.avatarUrl && (
                        <div className={`offer__avatar-wrapper ${selectedOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                          <img className="offer__avatar user__avatar" src={selectedOffer.host?.avatarUrl}
                            width="74" height="74" alt="Host avatar"
                          />
                        </div>
                      )}
                      {selectedOffer.host?.name && (
                        <span className="offer__user-name">{selectedOffer.host.name}</span>
                      )}
                      {selectedOffer.host?.isPro && (
                        <span className="offer__user-status">Pro</span>
                      )}
                    </div>}
                  <div className="offer__description">
                    <p className="offer__text">
                      {selectedOffer.description}
                    </p>
                  </div>
                </div>
                {reviewsActive &&
                  <ReviewsCardList reviewsList={reviewsActive} offerId={offerId} />}
              </div>
            </div>

            <Map mapClassName={'offer'} offers={nearOfferSelectedCard} city={cityMapActive} cardActiveId={selectedOffer.id} />

          </section>}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {!nearOffersIsLoading && (
                <NearPlaceCardList offerList={activeNearOffers} />
              )}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
