import {films} from '../../mocks/films';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import GenresCatalog, {GetAllExistingGenres} from './genres-catalog';
import {ALL_GENRES} from '../../consts';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockGenres = GetAllExistingGenres(films);
const mockSetFilmListCount = jest.fn();
const mockStore = configureMockStore();

describe('Component: GenresCatalog', () => {
  it('should render correctly', () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <GenresCatalog genres={mockGenres} selectedGenre={ALL_GENRES} setFilmListCount={mockSetFilmListCount}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('genres-catalog')).toBeInTheDocument();
    expect(screen.getByTestId('genre active')).toBeInTheDocument();
    expect(screen.getAllByTestId('genre inactive').length).toBe(mockGenres.length - 1);
  });
});
