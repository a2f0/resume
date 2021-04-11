import '../styles/globals.css';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store} from '../library/store';

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
