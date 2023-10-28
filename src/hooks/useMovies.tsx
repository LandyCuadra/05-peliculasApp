import {useEffect, useState} from 'react';
import MoviesHttp from '../api/moviesHttp';
import {Movie, MoviesResponse} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const moviesInitState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};
const useMovies = () => {
  const [moviesByCategory, setMoviesByCategory] =
    useState<MoviesState>(moviesInitState);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const [resNowPlaying, resPopular, resTopRated, resUpcoming] =
        await Promise.all([
          MoviesHttp.get<MoviesResponse>('/now_playing'),
          MoviesHttp.get<MoviesResponse>('/popular'),
          MoviesHttp.get<MoviesResponse>('/top_rated'),
          MoviesHttp.get<MoviesResponse>('/upcoming'),
        ]);

      setMoviesByCategory({
        nowPlaying: resNowPlaying.data.results,
        popular: resPopular.data.results,
        topRated: resTopRated.data.results,
        upcoming: resUpcoming.data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesByCategory,
    isLoading,
  };
};

export default useMovies;
