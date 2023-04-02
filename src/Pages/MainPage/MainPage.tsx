import React from 'react';
import './MainPage.css';
import { Input } from 'antd';
import { getPopularMovies, getSearchMovies } from '../../Services/Movies';
import { MovieDatas } from '../../Types/Movies';

const MainPage: React.FC = () => {
  const imgBaseUrl = process.env.REACT_APP_BASE_IMG_URL;
  const [popularMovies, setPopularMovies] = React.useState<MovieDatas[]>([]);
  const [searchedMovies, setSearchedMovies] = React.useState<MovieDatas[]>([]);
  const [searchInputValue, setSearchInputValue] = React.useState<string>('');

  const search = async (searhText: string) => {
    const searchResponse = await getSearchMovies(searhText);
    const popularMovieResponse = await getPopularMovies();
    setSearchInputValue(searhText);
    if (searchInputValue === '') {
      setPopularMovies(popularMovieResponse.data.results);
      setSearchedMovies([]);
    } else {
      setSearchedMovies(searchResponse.data.results);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const popularMovieResponse = await getPopularMovies();
      const popularMovieData = popularMovieResponse.data.results;
      setPopularMovies(popularMovieData);
    };

    fetchData();
  }, []);

  return (
    <div className='main-page-container'>
      <div className='main-page-navbar'>
        <div className='main-page-navbar-logo'>MANIAC MOVIE</div>
        <div className='main-page-navbar-search'>
          <Input
            placeholder='Type keywords to search Movie'
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>
      <div className='main-page-wrapper'>
        {(searchInputValue === '' ? popularMovies : searchedMovies).map(
          (movie, i) => {
            return (
              <div className='main-page-card' key={i}>
                <div className='main-page-card-image'>
                  <img
                    className='card-image'
                    src={`${imgBaseUrl}/${movie.poster_path}`}
                    alt={movie.title}
                    key={i}
                  />
                  <div className='main-page-card-image-desc'>
                    <span>{movie.overview}</span>
                  </div>
                </div>
                <div className='main-page-card-title'>{movie.title}</div>
                <div className='main-page-card-desc'>
                  <div className='main-page-card-desc-year'>
                    {movie.release_date}
                  </div>
                  <div className='main-page-card-desc-rating'>
                    {movie.vote_average}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MainPage;
