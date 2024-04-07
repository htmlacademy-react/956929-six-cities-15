import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {useAppDispatch} from '../../hooks/index';
import { setCityActive, setChangeMap, getOffers } from '../../store/offers-process/offers-process.slice';
import { citiesList, AppRoute } from '../../const';

type LocationListProps = {
  cityActive: string;
}

export default function LocationList({cityActive }: LocationListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function changeCity (city:string) {
    dispatch(setCityActive(city));
    dispatch(getOffers());
    dispatch(setChangeMap());
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city) => (
            <li key={city} className="locations__item">
              <Link
                className={classNames('locations__item-link tabs__item', {
                  'tabs__item--active': city === cityActive,
                })}
                onClick={(evt)=>{
                  evt.preventDefault();
                  changeCity(city);
                }}
                role="button"
                to={AppRoute.Main}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
