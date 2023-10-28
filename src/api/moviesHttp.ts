import axios from 'axios';

const MoviesHttp = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2238eedcdf81d7f489641bbf2da32893',
    language: 'es-ES',
  },
});

export default MoviesHttp;
