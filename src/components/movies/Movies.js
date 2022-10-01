import React from 'react';
import Header from '../header/Header';

import './Movies.css';
import '../header/Header.css';

import SearchForm from '../searchForm/SearchForm';
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
      <main>
        <SearchForm
        />
      </main>
      <Footer>
        <Footer/>
      </Footer>
    </>
  );
}

export default Movies;
