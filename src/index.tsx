import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction, getPromoFilm} from './store/api-actions';
import {browserHistory} from './browser-history.ts';
import {HistoryRouter} from './components/history-router/history-router.tsx';

store.dispatch(fetchFilmsAction());
store.dispatch(getPromoFilm());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
