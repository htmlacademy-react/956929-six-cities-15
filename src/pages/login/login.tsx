import { useRef, ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, citiesList } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRandomInteger } from '../../utils/utils';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import Logo from '../../components/logo/logo';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { setCityActive, getOffers, setChangeMap } from '../../store/offers-process/offers-process.slice';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^[A-za-z0-9_]+[A-za-z0-9_]{1,}$/.test(password);

const validate = (formData: AuthData): boolean => {
  if (!validateEmail(formData.email) || !validatePassword(formData.password)) {
    return false;
  }
  return true;
};

export default function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const cityButton = citiesList[getRandomInteger(0, citiesList.length - 1)];
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  function onCityButton(city: string) {
    dispatch(setCityActive(city));
    dispatch(getOffers());
    dispatch(setChangeMap());
  }

  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });

  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                  onChange={handleTextChange}
                  value={formData.email}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  onChange={handleTextChange}
                  value={formData.password}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isSubmitButtonOk}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                onClick={() => onCityButton(cityButton)} to={AppRoute.Main}
              >
                <span>
                  {cityButton}
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}


