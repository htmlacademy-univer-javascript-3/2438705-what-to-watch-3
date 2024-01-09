import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, ReducerType} from '../../consts';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/api-actions';
import FilmCard from '../../components/film-card/film-card';
import {Header} from '../../components/header/header';
import {MyListHeader} from '../../components/header/my-list-header/my-list-header';

function MyListPage() {
  const films = useAppSelector((state) => state[ReducerType.Main].favoriteFilms);
  const authorizationStatus = useAppSelector((state) => state.userReducer.authorizationStatus);
  const favoriteFilmsLength = useAppSelector((state) => state[ReducerType.Main].favoriteFilmsLength);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <div className="user-page">
      <Header isUserPage>
        <MyListHeader count={favoriteFilmsLength}/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {films.map((film) => <FilmCard key={film.id} film={film}/>)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
