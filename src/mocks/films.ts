import {Film} from '../types/film';

export const promoFilm : Film = {
  id: 0,
  title: 'The Grand Budapest Hotel',
  src: 'img/bg-the-grand-budapest-hotel.jpg',
  posterSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  ratingScore: 8.9,
  ratingLevel: 'Very Good',
  ratingCount: 240,
  text: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
  director: 'Wes Anderson',
  starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe, and other',
  genre: 'Drama',
  runtime: '1h 39m',
  releaseDate: 2014,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
};

export const films: Film[] = [
  {
    ...promoFilm, id: 0, title:'Bohemian Rhapsody', src: 'img/bohemian-rhapsody.jpg'
  }, {
    ...promoFilm, id: 1, title: 'What We Do in the Shadows Revenant', src: 'img/what-we-do-in-the-shadows.jpg'
  }, {
    ...promoFilm, id: 2, title: 'Johnny English', src: 'img/johnny-english.jpg'
  }, {
    ...promoFilm, id: 3, title: 'Pulp Fiction', src: 'img/pulp-fiction.jpg'
  }, {
    ...promoFilm, id: 4, title: 'No Country for Old Men', src: 'img/no-country-for-old-men.jpg',
  }, {
    ...promoFilm, id: 5, title: 'Fantastic Beasts: The Crimes of Grindelwald', src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  }, {
    ...promoFilm, id: 6, title: 'Macbeth', src: 'img/macbeth.jpg'
  }, {
    ...promoFilm, id: 7, title: 'We need to talk about Kevin', src: 'img/we-need-to-talk-about-kevin.jpg'
  },
];
