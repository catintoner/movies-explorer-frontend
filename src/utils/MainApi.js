import { BASE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    const result = await res.json();
    return Promise.reject(result.message);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  updateUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
      .then(this._checkResponse)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  addMovie(film) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: `https://api.nomoreparties.co${film.image.url}`,
        trailerLink: film.trailerLink,
        thumbnail: `https://api.nomoreparties.co${film.image.formats.thumbnail.url}`,
        movieId: film.id,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      })
    })
      .then(this._checkResponse)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
})
