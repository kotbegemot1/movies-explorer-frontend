import { MAIN_API_URL } from './constants';

class MainApi {
  constructor(){
    this._url = MAIN_API_URL;
    this._headers = {
      'Content-Type': 'application/json'
    }
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  Register(name, email, password) {
    console.log(name, email, password);
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })
    .then(res => this._checkResponse(res))
  };

  Login(email, password) {
    console.log(email, password);
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(res => this._checkResponse(res))
    .then(res => console.log(res))
  };

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
    })
      .then(res => this._checkResponse(res))
  };

  editUserInfo(name, email) {
    //console.log(name, email);
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(res => this._checkResponse(res))
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
  };

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        owner: movie.owner,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then(res => this._checkResponse(res))
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
  }

    logout() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
    })
    .then((res) => {
      const test = this._checkResponse(res)
      return test
    })
  };

}

export const mainApi = new MainApi();