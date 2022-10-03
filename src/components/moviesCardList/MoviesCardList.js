import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList(props) {
  const films = [];

  React.useEffect(
    () => {

      for (let count = 0; count < 3; count++) {
        films.push(<MoviesCard
          likeBtnClassName={props.likeBtnClassName}
        />);
      }
      console.log(films);
    });

  return (
    <section className='cardList__container'>
      {films.map((film) => {
        return (
          // <MoviesCard
          //   likeBtnClassName={props.likeBtnClassName}
          // />
          film
        )
      }
      )}
      {/* <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      />
      <MoviesCard
        likeBtnClassName={props.likeBtnClassName}
      /> */}
    </section>
  );
}

export default MoviesCardList;
