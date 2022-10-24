import { moviesUrl } from './constants';

class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`dev error ${res.status} ${res.message}`);
  }

  getBeatFilmMovies() {
    return fetch(
      `${this._url}`,
      {
        headers: this._headers,
      },
    )
      .then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: moviesUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
