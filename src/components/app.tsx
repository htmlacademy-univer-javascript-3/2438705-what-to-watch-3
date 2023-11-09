import {MainPage} from '../pages/main-page/main-page';
import {JSX} from 'react';
import {FilmCardProps} from '../pages/main-page/main-page';


export function App(props: FilmCardProps): JSX.Element{
  return <MainPage {...props}/>;
}
