import { BASE_URL } from './constants';

class Auth {
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

  createUser(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  loginUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  logoutUser() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  checkToken(userId) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userId
      },
      credentials: 'include'
    })

      .then(this._checkResponse)
  }
}

export const auth = new Auth({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
})
