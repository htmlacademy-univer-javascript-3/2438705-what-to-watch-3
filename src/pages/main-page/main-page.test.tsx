import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {films} from '../../mocks/films';
import {createAPI} from '../../services/api';
import {StateType} from '../../types/StateType';
import {AuthorizationStatus, ReducerType} from '../../consts';
import MainPage from './main-page';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<StateType, Action, ThunkDispatch<StateType, typeof api, Action>>(middlewares);
const mockFilms = films;
const mockFilm = films[0];

describe('Main page', () => {
  it('should render correctly if not authorized', () => {
    const store = mockStore({
      [ReducerType.User]: {
        authorizationStatus: AuthorizationStatus.NonAuthorized,
        avatar: null,
      },
      [ReducerType.Main]: {
        films: mockFilms,
        filteredFilms: mockFilms,
        promo: mockFilm,
        favoriteFilms: mockFilms,
        favoriteFilmsLength: mockFilms.length,
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText(/My List/i)).not.toBeInTheDocument();
  });

  it('should render correctly if authorized', () => {
    const store = mockStore({
      [ReducerType.User]: {
        authorizationStatus: AuthorizationStatus.Authorized,
        avatar: null,
      },
      [ReducerType.Main]: {
        films: mockFilms,
        filteredFilms: mockFilms,
        promo: mockFilm,
        favoriteFilms: mockFilms,
        favoriteFilmsLength: mockFilms.length,
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
  });
});
