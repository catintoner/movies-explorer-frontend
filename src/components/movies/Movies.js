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



function Movies(props) {

  const [isSearched, setIsSearched] = React.useState(localStorage.getItem('movies') ? true : false);

  const [isFinding, setIsFinding] = React.useState(false);

  const [keyWord, setKeyWord] = React.useState('');

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
  }

  function filteringMovies(keyWord) {
    const shortTime = 40;

    const moviesFilter = JSON.parse(localStorage.getItem('movies')).filter((film) => (film.nameRU.toLowerCase().includes(keyWord.toLowerCase())) && (JSON.parse(localStorage.getItem('short')) ? film.duration <= shortTime : ' '));

    localStorage.setItem('keyWord', keyWord);
    setKeyWord('');
    props.setMovies(moviesFilter);
  }

  function searchMovies() {
    setIsFinding(true);

    if (!localStorage.getItem('movies')) {
      moviesApi.getBeatFilmMovies()
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          filteringMovies(keyWord);
          setIsFinding(false);
        })
    } else {
      filteringMovies(keyWord);
      setIsFinding(false);
    }
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    searchMovies();
  }

  function handleSearchMoviesWithShorty() {
    searchMovies();
  }

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
          searchWithShorty={handleSearchMoviesWithShorty}
          keyWord={keyWord}
          // checked={isShortDisabled}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
        />
        <Preloader
          isFinding={isFinding}
        />
        <MoviesCardList
          movies={props.movies}
          savedMovies={props.savedMovies}
          likeBtnClassName={props.likeBtnClassName}
          handleLikeClick={props.handleLikeClick}
          handleDeleteClick={props.handleDeleteClick}
        />
        <button className='movies__btn-more'>
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
