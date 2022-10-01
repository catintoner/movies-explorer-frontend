import React from 'react';
import Header from '../header/Header';

import './Movies.css';
import '../header/Header.css';

function Movies(props) {
  return (
    <Header
    loggedIn={props.loggedIn}
    />
  );
}

export default Movies;
