import {store} from '../store';
import {FilmType} from './FilmType';
import {AuthorizationStatus} from '../consts';
import {Review} from './ReviewType';

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  films: FilmType[];
  dataIsLoading: boolean;
  // error: string | null,
  promo: FilmType | null;
  currentGenre: string;
  filteredFilms: FilmType[];
  favoriteFilms: FilmType[];
  favoriteFilmsLength: number;
  shownCount: number;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  avatar: string | null;
}

export type FilmState = {
  film: FilmType | null;
  comments: Review[];
  similar: FilmType[];
}
