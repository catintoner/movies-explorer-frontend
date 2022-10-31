import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../preloader/Preloader';
import SearchForm from '../searchForm/SearchForm';

import './SavedMovies.css';

import { mainApi } from '../../utils/MainApi';

function SavedMovies(props) {

  const [movies, setMovies] = React.useState(props.savedMovies);

  const [isFinding, setIsFinding] = React.useState(false);

  const [keyWord, setKeyWord] = React.useState('');

  const [isChecked, setIsChecked] = React.useState(false);

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
  }

  function handleClickCheck() {
    setIsChecked((state) => {
      console.log(state);
      return !state;
    });
  }

  function filteringMovies(keyWord) {
    const shortTime = 40;
    const filtredMovies = props.savedMovies.filter((film) => (film.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (isChecked ? film.duration <= shortTime : true)));

    localStorage.setItem('keyWord', keyWord);
    setKeyWord('');
    setMovies(filtredMovies);
  }

  function searchMovies() {
    setIsFinding(true);
    filteringMovies(keyWord);
    setIsFinding(false);
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    searchMovies();
  }

  function handleSearchMoviesWithShorty() {
    searchMovies();
  }

  function onDeleteClick(newListFilms) {
    props.setSavedMovies(newListFilms);
    setMovies(newListFilms);
  }

  function handleDeleteClick(film) {
    const movieId = film._id;
    mainApi.deleteMovie(movieId)
      .then(() => {
        onDeleteClick((state) => {
          return state.filter(item => item._id !== movieId);
        })
      })
  }

  React.useEffect(() => {
    searchMovies();
  }, [isChecked])

  return (

    <>
      <header>
        <Header
          loggedIn={props.loggedIn}
        />
      </header>
      <main>
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          handleKeyWord={handleKeyWord}
          searchWithShorty={handleSearchMoviesWithShorty}
          keyWord={keyWord}
          isChecked={isChecked}
          handleClickCheck={handleClickCheck}
        />
        <Preloader
          isFinding={isFinding}
        />
        <MoviesCardList
          movies={movies}
          savedMovies={props.savedMovies}
          likeBtnClassName={props.likeBtnClassName}
          handleDeleteClick={handleDeleteClick}
        />
      </main>
      <footer>
        <Footer
        />
      </footer>
    </>
  );
}

export default SavedMovies;
