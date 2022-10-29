import React from 'react';

import './MoviesCard.css';

function MoviesCard(props) {

  const [btnLikeStatus, setBtnLikeStatus] = React.useState(false);

  React.useEffect(() => {
    let likedMovie = props.savedMovies.find(movie => movie.movieId === props.film.id)
    if (likedMovie) {
      setBtnLikeStatus(true);
    }
  }, [props.savedMovies]);

  function handleLike() {

    if (!btnLikeStatus) {
      props.handleLikeClick(props);
      setBtnLikeStatus(true);
    } else {
      setBtnLikeStatus(false);
      props.handleDeleteClick(props);
    }
  }

  return (
    <article className='card'>
      <img className='card__photo' src={` https://api.nomoreparties.co/${props.picture}`} alt='Кадр из фильма' />
      <div className='card__info'>
        <h4 className='card__title'>
          {props.nameRU}
        </h4>
        <p className='card__time-duration'>
          {`${Math.floor(props.duration / 60)}ч ${props.duration % 60}мин`}
        </p>
        <button className={`card__btn-like ${btnLikeStatus ? props.likeBtnClassName : ''}`}
          type='button'
          onClick={handleLike}
        >
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;
