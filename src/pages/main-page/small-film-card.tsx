import {JSX} from 'react';

type SmallFilmCardProps = {
  imgSrc: string;
  filmName: string;
}

export function SmallFilmCard({imgSrc, filmName}: SmallFilmCardProps) : JSX.Element{
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgSrc} alt={filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmName}</a>
      </h3>
    </article>
  );
}
