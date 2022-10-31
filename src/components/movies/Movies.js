import React, { useEffect, useState } from 'react';

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

import { LOADINFO } from '../../utils/constants';



function Movies(props) {

  const [loadInfo, setLoadInfo] = React.useState({ start: 0, load: 0 });

  const [renderedFilms, setRenderedFilms] = React.useState([]);

  const [isFinding, setIsFinding] = React.useState(false);

  const [keyWord, setKeyWord] = React.useState('');

  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('short')) || false);

  const [moreFilms, setMoreFilms] = React.useState(false);

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
  }

  function handleClickCheck() {
    localStorage.setItem('short', JSON.stringify(!isChecked));
    setIsChecked(!isChecked);
    searchMovies();
  }

  function handleLikeClick({ film }) {
    mainApi.addMovie(film)
      .then((addedFilm) => {
        props.setSavedMovies([...props.savedMovies, addedFilm]);
      })
  }

  function handleDeleteClick({ film }) {
    let movie = props.savedMovies.find(movie => movie.movieId === film.id);
    let movieId = movie._id;
    mainApi.deleteMovie(movieId)
      .then(() => {
        props.setSavedMovies(props.savedMovies.filter(item => item._id !== movieId));
      })
  }

  function filteringMovies(keyWord, pushNew) {
    const shortTime = 40;

    const filtredMovies = JSON.parse(localStorage.getItem('movies')).filter((film) => (film.nameRU.toLowerCase().includes(keyWord.toLowerCase())) && (JSON.parse(localStorage.getItem('short')) ? film.duration <= shortTime : true));

    localStorage.setItem('keyWord', keyWord);
    setKeyWord('');
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
      filteringMovies(keyWord, pushNew);
      setIsFinding(false);
    }
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    searchMovies();
  }

  window.addEventListener('resize', () => onWindowResize());


  function onWindowResize() {
    setTimeout(() => {
      getLoadInfo();
    }, 500);
  }

  function getLoadInfo() {
    const { innerWidth } = window;
    if (innerWidth >= 1280) {
      setLoadInfo(LOADINFO.max);
    } else if (innerWidth >= 768) {
      setLoadInfo(LOADINFO.average);
    } else {
      setLoadInfo(LOADINFO.min);
    }
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
    if (!(filtredMovies.length > newFilms.length)) {
      setMoreFilms(false);
      localStorage.setItem('moreFilms', JSON.stringify(moreFilms));
    } else {
      setMoreFilms(true);
      localStorage.setItem('moreFilms', JSON.stringify(moreFilms));
    }
    setRenderedFilms(newFilms);
    props.setMovies(newFilms);
  }

  window.addEventListener('resize', getLoadInfo);

  React.useEffect(() => {
    getLoadInfo();
  }, []);

  React.useEffect(() => {
    if (props.movies.length && !renderedFilms.length && loadInfo.start) {
      setRenderedFilms(props.movies);
    }
  }, [loadInfo]);

  // React.useEffect(() => {
  //   reloadFilms(props.movies);
  // }, [loadInfo]);

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
