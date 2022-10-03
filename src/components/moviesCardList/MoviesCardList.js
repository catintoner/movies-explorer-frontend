import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList(films) {
  return (
    <section className='cardList__container'>
      {/* {films.map((film) => {
        return (
          <MoviesCard
          />
        );
      })} */}
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
      <MoviesCard
      />
    </section>
  );
}

export default MoviesCardList;
