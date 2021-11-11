import {AppProps} from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import {Provider} from 'react-redux';
import {store} from '../lib/store';

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
