import React from 'react';

import './MoviesCard.css';

import cardDevelop from '../../images/card__develop.jpg';

function MoviesCard(props) {

  const [btnLikeStatus, setBtnLikeStatus] = React.useState(false);

  function handleLikeClick() {
    if (btnLikeStatus) {
      setBtnLikeStatus(false);
    } else {
      setBtnLikeStatus(true);
    }

  }

  return (
    <article className='card'>
      <img className='card__photo' src={cardDevelop} alt='Кадр из фильма' />
      <div className='card__info'>
        <h4 className='card__title'>
          Something name..
        </h4>
        <p className='card__time-duration'>
          16h 16min
        </p>
        <button className={`card__btn-like ${btnLikeStatus ? '' : props.likeBtnClassName}`}
          type='button'
          onClick={handleLikeClick}
        >
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;
