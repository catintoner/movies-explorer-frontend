import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../moviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  movies,
  likeBtnClassName,
  handleLikeClick,
  handleDeleteClick,
  savedMovies,
}) {

  const location = useLocation();

  const [moviesForRender, setMoviesForRender] = React.useState([]);

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      setMoviesForRender(movies);
    }
  }, [movies, location.pathname]);

  return (
    <section className='cardList__container'>
      {moviesForRender.length > 0 ? moviesForRender.map((film) => {
        return (
          <MoviesCard
            film={film}
            key={film.id}
            likeBtnClassName={likeBtnClassName}
            handleLikeClick={handleLikeClick}
            handleDeleteClick={handleDeleteClick}
            savedMovies={savedMovies}
            picture={film.image.url}
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
