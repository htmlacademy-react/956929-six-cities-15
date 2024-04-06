import { Helmet } from 'react-helmet-async';
// import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesCardList from '../../components/favorities-card-list/favorities-card-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

export default function FavoritePage(): JSX.Element {
  const favoritesIsNotFound = useAppSelector((state) => state.favoritesIsNotFound);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {/* {(favoritesIsNotFound || !favoriteCards.length) ? ( */}
          {(favoritesIsNotFound) ? (
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
