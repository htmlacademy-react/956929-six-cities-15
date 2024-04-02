import {useAppSelector} from '../../hooks';
import style from './error-message.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className={style.error__message}>{error}</div>
    : null;

}
