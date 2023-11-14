import {MainPage} from '../../pages/main-page/main-page';
import {JSX} from 'react';
import {FilmCardProps} from '../../pages/main-page/main-page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page';
import {MyListPage} from '../../pages/my-list-page/my-list-page';
import {FilmPage} from '../../pages/film-page/film-page';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page';
import {PlayerPage} from '../../pages/player-page/player-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {PrivateRoute} from '../private-route/private-route';
import {AuthStatus, AppRoute} from '../../const';
import {promoFilm, films} from '../../mocks/films';


export function App(props: FilmCardProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage {...props} />}/>
        <Route path={AppRoute.Login} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}><MyListPage promoFilm={promoFilm} films={films} /></PrivateRoute>
        }
        />
        <Route path={AppRoute.Film}>
          <Route index element={<FilmPage promoFilm={promoFilm} films={films}/>} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage film={promoFilm}/>} />
        </Route>
        <Route path={AppRoute.Player} element={<PlayerPage video={promoFilm.video}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>);
}
