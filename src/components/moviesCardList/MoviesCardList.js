import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList(props) {
  const [films, setFilms] = React.useState([]);

  function addValues(counter) {
    const movies = [];
    for (let count = 0; count < counter; count++) {
      movies.push(1 + (Math.random() * (100 - 1)));
    }
    console.log(movies);
    setFilms(movies);
  }

  React.useEffect(
    () => {
      addValues(props.count);
    }, [props.count]
  );

  return (
    <section className='cardList__container'>
      {films.map((film) => {
        return (
          <MoviesCard
            key={film}
            likeBtnClassName={props.likeBtnClassName}
          />
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
