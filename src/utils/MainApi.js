import { BASE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers, credentials: 'include' })
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
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
})
