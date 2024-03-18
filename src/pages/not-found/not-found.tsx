import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/header/logo';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page">

      <Helmet>
        <title>6 cities: not found</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1>404</h1>
          <h2>Pages not found</h2>
          <Link to="/">
            <button>Go back to main page</button>
          </Link>
        </div>
      </main>
    </div>
  );

}


