import {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {store} from '../lib/store';
import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
