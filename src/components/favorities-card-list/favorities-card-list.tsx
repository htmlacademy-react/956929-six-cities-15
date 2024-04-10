import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import FavoritesCard from '../../components/favorities-card/favorities-card';
import { getFavorites } from '../../store/favorites/favorites.selectors';
import { setCityActive, getOffers, setChangeMap } from '../../store/offers/offers.slice';

export default function FavoritesCardList(): JSX.Element {
  const favoritesCardsList = useAppSelector(getFavorites);
  const currentOfferLocations = Array.from(new Set(favoritesCardsList.map((offer) => offer.city.name)));
  const dispatch = useAppDispatch();

  function onCityButton(city: string) {
    dispatch(setCityActive(city));
    dispatch(getOffers());
    dispatch(setChangeMap());
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          currentOfferLocations.map((city) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link
                    className="locations__item-link"
                    onClick={() => onCityButton(city)}
                    to={AppRoute.Main}
                  >
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                { favoritesCardsList.
                  filter((card) => card.city.name === city)
                  .map((card) => (
                    <FavoritesCard key={card.id} card={card} />
                  ))}
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
