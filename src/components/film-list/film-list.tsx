import {FilmType} from '../../types/FilmType';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  filmList: FilmType[];
  currentFilm?: FilmType;
}

function FilmList(props: FilmListProps) {
  const list = [];
  const [, setActive] = useState<number | null>(null);
  for (const film of props.filmList) {
    if (film.id === props.currentFilm?.id) {
      continue;
    }
    list.push(
      <FilmCard key={`film-card-${film.id}`}
        film={film}
        onHover={setActive}
        data-testid='film-card'
      />
    );
  }
  return (
    <div className="catalog__films-list" data-testid='film-list'>
      {list}
    </div>
  );
}

export default FilmList;
