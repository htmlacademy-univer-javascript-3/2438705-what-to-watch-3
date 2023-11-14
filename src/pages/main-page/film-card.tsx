import {JSX} from 'react';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  promoFilm: Film;
  onFilmCard: (id: number) => void;
}

export function FilmCard({promoFilm, onFilmCard}: FilmCardProps) : JSX.Element{
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseEnter={() => onFilmCard(promoFilm.id)} onMouseLeave={() => onFilmCard(0)}>
        <img src={promoFilm.src} alt={promoFilm.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">{promoFilm.title}</Link>
      </h3>
    </article>
  );
}
