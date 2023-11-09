import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {FilmCardProps} from './pages/main-page/main-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const filmCardProps: FilmCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};


root.render(
  <React.StrictMode>
    <App {...filmCardProps} />
  </React.StrictMode>
);
