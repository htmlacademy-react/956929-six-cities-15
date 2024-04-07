import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import FavoritesCard from '../../components/favorities-card/favorities-card';


export default function FavoritesCardList(): JSX.Element {
  const favoritesCardsList = useAppSelector((state)=>state.offers).filter((offer) => offer.isFavorite === true);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoritesCardsList.map((card) => (
            <li className="favorites__locations-items" key={card.id}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoute.Main}>
                    <span>{card.city.name}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesCard card={card} />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
