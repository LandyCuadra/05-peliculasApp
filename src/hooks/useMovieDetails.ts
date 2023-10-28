import {useEffect, useState} from 'react';
import MoviesHttp from '../api/moviesHttp';
import {MovieFull} from '../interfaces/movieInterfaces';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull: MovieFull;
}

export const useMovieDetails = (movieId: string) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: {} as MovieFull,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = MoviesHttp.get<MovieFull>(`/${movieId}`);
    const movieCastPromise = MoviesHttp.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, movieCastResp] = await Promise.all([
      movieDetailsPromise,
      movieCastPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: movieCastResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  });

  return {
    ...state,
  };
};
