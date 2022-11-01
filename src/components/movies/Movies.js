import React from 'react';

import { withRouter } from 'react-router-dom';

import Header from '../header/Header';

import './Movies.css';
import '../header/Header.css';

import SearchForm from '../searchForm/SearchForm';
import Preloader from '../preloader/Preloader';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Footer from '../footer/Footer';

import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

import { LOADINFO, MAXWIDTH, SHORTTIME } from '../../utils/constants';
import { auth } from '../../utils/Auth';



function Movies(props) {

  const [loadInfo, setLoadInfo] = React.useState({ start: 0, load: 0 });

  const [renderedFilms, setRenderedFilms] = React.useState(JSON.parse(localStorage.getItem('lastMovies')) || []);

  const [isFinding, setIsFinding] = React.useState(false);

  const [keyWord, setKeyWord] = React.useState(localStorage.getItem('keyWord') || '');

  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('short')) || false);

  const [moreFilms, setMoreFilms] = React.useState(JSON.parse(localStorage.getItem('moreFilms')) || false);

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
  }

  function handleClickCheck() {
    localStorage.setItem('short', JSON.stringify(!isChecked));
    setIsChecked(!isChecked);
    searchMovies(false);
  }

  function handleLikeClick({ film }) {
    mainApi.addMovie(film)
      .then((addedFilm) => {
        props.setSavedMovies([...props.savedMovies, addedFilm]);
      })
      .catch((err) => {
        if (err === 'Необходима авторизация') {
          auth.logoutUser()
            .then(() => {
              localStorage.clear();
              props.setLoggedIn(false);
            })
          }
      })
  }

  function handleDeleteClick({ film }) {
    let movie = props.savedMovies.find(movie => movie.movieId === film.id);
    let movieId = movie._id;
    mainApi.deleteMovie(movieId)
      .then(() => {
        props.setSavedMovies(props.savedMovies.filter(item => item._id !== movieId));
      })
      .catch((err) => {
        if (err === 'Необходима авторизация') {
          auth.logoutUser()
            .then(() => {
              localStorage.clear();
              props.setLoggedIn(false);
            })
        }
      })
  }

  function filteringMovies(keyWord, pushNew) {

    const filtredMovies = JSON.parse(localStorage.getItem('movies')).filter((film) => (film.nameRU.toLowerCase().includes(keyWord.toLowerCase())) && (JSON.parse(localStorage.getItem('short')) ? film.duration <= SHORTTIME : true));

    localStorage.setItem('keyWord', keyWord);
    reloadFilms(filtredMovies, pushNew);
  }

  function searchMovies(pushNew) {
    setIsFinding(true);

    if (!localStorage.getItem('movies')) {
      moviesApi.getBeatFilmMovies()
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          filteringMovies(keyWord, pushNew);
          setIsFinding(false);
        })
    } else {
      filteringMovies(!pushNew ? keyWord : localStorage.getItem('keyWord') || '', pushNew);
      setIsFinding(false);
    }
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    searchMovies();
  }

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  React.useEffect(() => {

    function handleWindowResize() {
      setWindowSize(getWindowSize());
      getLoadInfo();
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, [windowSize]);

  function getLoadInfo() {
    if (windowSize >= MAXWIDTH) {
      setLoadInfo(LOADINFO.max);
    } else {
      setLoadInfo(LOADINFO.average);
    }
    //  else {
    //   setLoadInfo(LOADINFO.min);
    // }
  }

  let newFilms = [];

  function reloadFilms(filtredMovies, pushNew) {
    if (!renderedFilms.length && pushNew) {
      return;
    }

    const { start, load } = loadInfo;
    if (!renderedFilms.length || !pushNew) {
      newFilms = filtredMovies.slice(0, start);
    } else {
      newFilms = filtredMovies.slice(renderedFilms.length, renderedFilms.length + load);
    }
    if (pushNew) {
      newFilms = renderedFilms.concat(newFilms);
    }

    const isMoreButtonVisible = filtredMovies.length > renderedFilms.length;
    setMoreFilms(isMoreButtonVisible);
    localStorage.setItem('moreFilms', JSON.stringify(isMoreButtonVisible));
    setRenderedFilms(newFilms);
    localStorage.setItem('lastMovies', JSON.stringify(newFilms));
  }



  React.useEffect(() => {
    getLoadInfo();
  }, []);

  return (
    <>
      <header>
        <Header
          loggedIn={props.loggedIn}
        />
      </header>
      <main className='movies__container'>
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          handleKeyWord={handleKeyWord}
          keyWord={keyWord}
          isChecked={isChecked}
          handleClickCheck={handleClickCheck}
        />
        <Preloader
          isFinding={isFinding}
        />
        <MoviesCardList
          movies={renderedFilms}
          savedMovies={props.savedMovies}
          likeBtnClassName={props.likeBtnClassName}
          handleLikeClick={handleLikeClick}
          handleDeleteClick={handleDeleteClick}
        />
        <button
          className={`movies__btn-more ${!moreFilms && 'movies__btn-more_type_hidden'}`}
          onClick={() => searchMovies(true)}
        >
          Ещё
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withRouter(Movies);
