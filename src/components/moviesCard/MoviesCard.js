import React from 'react';

import './MoviesCard.css';

function MoviesCard(props) {

  const [btnLikeStatus, setBtnLikeStatus] = React.useState(false);

  React.useEffect(() => {
    const likedMovie = props.savedMovies.find(movie => movie.movieId === props.movieId)
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

  function editUrlForImg(picture) {
    const startUrl = 'https://api.nomoreparties.co/';
    if (picture.includes(startUrl)) {
      return picture;
    } else {
      return (
        picture = startUrl + picture
      );
    }
  }

  return (
    <article className='card'>
      <a className='card__link'  href={props.link} alt='Ссылка на фильм' target='_blank' rel='noreferrer'>
        <img className='card__photo' src={editUrlForImg(props.picture)} alt='Кадр из фильма' />
        </a>
      <div className='card__info'>
        <a className='card__title' href={props.link} alt='Ссылка на фильм' target='_blank' rel='noreferrer'>
          {props.nameRU}
        </a>
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
