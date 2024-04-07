import Logo from './logo';
import Login from '../login/login';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Login />
        </div>
      </div>
    </header>
  );
}
