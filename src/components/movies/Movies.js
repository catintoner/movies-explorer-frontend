import React from 'react';
import Header from '../header/Header';

import './Movies.css';
import '../header/Header.css';

import SearchForm from '../searchForm/SearchForm';
import Preloader from '../preloader/Preloader';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Footer from '../footer/Footer';



function Movies(props) {

  //временное решение
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
      <main className='movies__container'>
        <SearchForm
        />
        <Preloader
        />
        <MoviesCardList
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

export default Movies;
