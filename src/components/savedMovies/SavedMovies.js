import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../preloader/Preloader';
import SearchForm from '../searchForm/SearchForm';

import './SavedMovies.css';

function SavedMovies(props) {

  const [isSearched, setIsSearched] = React.useState(false);

  const [movies, setMovies] = React.useState([]);

  const [isFinding, setIsFinding] = React.useState(false);

  const [keyWord, setKeyWord] = React.useState('');

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
  }

  function filteringMovies(keyWord) {
    const shortTime = 40;

    const moviesFilter = props.savedMovies.filter((film) => (film.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (JSON.parse(localStorage.getItem('short')) ? film.duration <= shortTime : ' ')));

    localStorage.setItem('keyWord', keyWord);
    setKeyWord('');
    setMovies(moviesFilter);
  }

  function searchMovies() {
    setIsFinding(true);
    filteringMovies(keyWord);
    setIsFinding(false);
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    searchMovies();
    setIsSearched(true);
  }

  function handleSearchMoviesWithShorty() {
    searchMovies();
    setIsSearched(true);
  }

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
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
        />
        <Preloader
          isFinding={isFinding}
        />
        <MoviesCardList
          isSearched={isSearched}
          movies={movies}
          savedMovies={props.savedMovies}
          likeBtnClassName={props.likeBtnClassName}
          handleDeleteClick={props.handleDeleteClick}
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
