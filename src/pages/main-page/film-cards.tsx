import {FilmCard} from './film-card';
import {Film} from '../../types/film';
import {JSX, useState} from 'react';

type FilmCardsProps = {
  focusFilmId : number;
  films: Film[];
};

export function FilmCards({focusFilmId, films}: FilmCardsProps): JSX.Element{
  const [, setFocusFilm] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) =>{
        if (film.id !== focusFilmId){
          return (
            <FilmCard key={film.id} promoFilm={film} onFilmCard={(id) => setFocusFilm(id)}/>
          );
        }
      })}
    </div>
  );
}
