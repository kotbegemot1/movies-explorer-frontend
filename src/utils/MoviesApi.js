import { MOVIES_API_URL_MOVIES } from './constants';

class MoviesApi {
  constructor(){
    this._url = MOVIES_API_URL_MOVIES;
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._url}`)
    .then(res => this._checkResponse(res))
  };

}

export const moviesApi = new MoviesApi();