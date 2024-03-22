import Main from '../../pages/main/main';

type AppProps = {
  placesToStay: number;
};

export default function App({placesToStay}: AppProps): JSX.Element {
  return (
    <Main placesToStay={placesToStay}/>
  );
}

