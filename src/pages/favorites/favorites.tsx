import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner/spinner';
import FavoritesCardList from '../../components/favorities-card-list/favorities-card-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import { getFavoritesIsNotFound, getFavoritesIsLoading } from '../../store/favorites-process/favorites-process.selectors';

export default function FavoritePage(): JSX.Element {
  const isLoading = useAppSelector(getFavoritesIsLoading);
  const notFound = useAppSelector(getFavoritesIsNotFound);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {isLoading && <Spinner />}
          {(notFound) ? (
            <FavoritesEmpty />
          ) : (
            <FavoritesCardList />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
