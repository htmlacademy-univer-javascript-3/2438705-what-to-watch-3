import {JSX} from 'react';
import {Link} from 'react-router-dom';

export function NotFoundPage(): JSX.Element{
  return (
    <section className="not-found-page">
      <h1>404 Not Found</h1>
      <Link to="/" title='Вернуться на главную'/>
    </section>
  );
}
