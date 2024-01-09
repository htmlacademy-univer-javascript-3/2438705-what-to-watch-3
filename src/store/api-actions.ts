import {createAsyncThunk} from '@reduxjs/toolkit';
import {StateType} from '../types/StateType';
import {APIRoute} from '../consts';
import {AuthorizationData} from '../types/AuthorizationData';
import {UserType} from '../types/UserType';
import {FilmType} from '../types/FilmType';
import {AxiosInstance} from 'axios';
import {Review} from '../types/ReviewType';

export const fetchFilmsAction = createAsyncThunk<FilmType[], undefined, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'fetchFilms', async (_arg, { extra: api }) => {
    const {data} = await api.get<FilmType[]>('/films');
    return data;
  });

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'checkAuth', async (_arg, { extra: api }) => {
    const {data} = await api.get(APIRoute.LOGIN);
    return data;
  });

export const loginAction = createAsyncThunk<UserType, AuthorizationData, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'login', async ({email, password}, { extra: api }) => {
    const { data} = await api.post<UserType>(APIRoute.LOGIN, {email, password});
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'logout', async (_arg, { extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
  });

export const getPromoFilm = createAsyncThunk<FilmType, undefined, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm', async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType>(APIRoute.PROMO);
    return data;
  });

export const getFilm = createAsyncThunk<FilmType, string, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'getFilm', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoute.FILMS}/${filmId}`);
    return data;
  });

export const getSimilarFilms = createAsyncThunk<FilmType[], string, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'getSimilarFilms', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(
      `${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR}`
    );
    return data;
  });

export const getFilmReviews = createAsyncThunk<Review[], string, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'getFilmReviews', async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(
      `${APIRoute.COMMENTS}/${filmId}`
    );
    return data;
  });

export const postFilmReview = createAsyncThunk<void, {
  id: number;
  comment: string;
  rating: number;
},
{
  state: StateType;
  extra: AxiosInstance;
}
>(
  'data/postCommentById',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post<Review[]>(`${APIRoute.COMMENTS}/${id}`, {comment, rating});
  });

export const fetchFavoriteFilms = createAsyncThunk<FilmType[], undefined, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'fetchFavoriteFilms', async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.FAVORITE);
    return data;
  });

export const changeFilmFavoriteStatus = createAsyncThunk<FilmType, {
  filmId: number;
  status: number;
}, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'changeFilmFavoriteStatus', async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FilmType>(`${APIRoute.FAVORITE}/${id}/${isFavorite}`);
    return data;
  });

export const changePromoFavoriteStatus = createAsyncThunk<FilmType, {
  filmId: number;
  status: number;
}, {
  state: StateType;
  extra: AxiosInstance;
}>(
  'changePromoFavoriteStatus', async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FilmType>(`${APIRoute.FAVORITE}/${id}/${isFavorite}`);
    return data;
  });
