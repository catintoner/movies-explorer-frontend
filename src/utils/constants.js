const BASE_URL = 'https://backend.catintonersDiplom.nomorepartiesxyz.ru';
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

const SHORTTIME = 40;
const MAXWIDTH = 1280;
const AVERAGEWIDTH = 768;

export {
  BASE_URL,
  moviesUrl,
  LOADINFO,
  SHORTTIME,
  MAXWIDTH,
  AVERAGEWIDTH,
};
