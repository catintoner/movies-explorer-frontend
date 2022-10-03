import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../preloader/Preloader';
import SearchForm from '../searchForm/SearchForm';

import './SavedMovies.css';

function SavedMovies(props) {

  React.useEffect(
    () => {
      props.setLoggedIn(true);
    }
  )

  return (

    <>
      <header>
        <Header
        loggedIn={props.loggedIn}
        />
      </header>
      <main>
        <SearchForm
        />
        <Preloader
        />
        <MoviesCardList
          likeBtnClassName={props.likeBtnClassName}
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
