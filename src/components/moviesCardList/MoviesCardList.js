import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList({
  movies,
  likeBtnClassName,
  handleLikeClick,
  handleDeleteClick,
  savedMovies,
}) {

  return (
    <section className='cardList__container'>
      {movies.length > 0 ? movies.map((film) => {
        return (
          <MoviesCard
            film={film}
            key={film.id ? film.id : film.movieId}
            _id = {film._id ? film._id : film.id}
            movieId={film.id ? film.id : film.movieId}
            likeBtnClassName={likeBtnClassName}
            handleLikeClick={handleLikeClick}
            handleDeleteClick={handleDeleteClick}
            savedMovies={savedMovies}
            picture={film.image.url ? film.image.url : film.image}
            link={film.trailerLink}
            nameRU={film.nameRU}
            duration={film.duration}
          />
        )
      }
      ) : <p className='cardList__infoMessage'>Ничего не найдено</p>
      }
    </section>
  );
}

export default MoviesCardList;
