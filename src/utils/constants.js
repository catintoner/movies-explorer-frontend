const BASE_URL = 'http://localhost:3001';
const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies';

//https://backend.catintonersDiplom.nomoredomains.club
//http://localhost:3001

const LOADINFO = {
  max: {
    start: 12,
    load: 3
  },
  average: {
    start: 8,
    load: 2
  },
  min: {
    start: 5,
    load: 1
  }
};

export {BASE_URL, moviesUrl, LOADINFO};
