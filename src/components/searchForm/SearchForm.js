import React from 'react';
import FilterCheckbox from '../filterCheckbox/FilterCheckbox';

import './SearchForm.css';

import { moviesApi } from '../../utils/MoviesApi';

function SearchForm() {

  const [keyWord, setKeyWord] = React.useState('');

  function handleKeyWord(evt) {
    setKeyWord(evt.target.value);
    console.log(keyWord);
  }


  function handleFindFilms(evt) {
    evt.preventDefault();
    moviesApi.getBeatFilmMovies()
      .then((movies) => {
        console.log(movies);
      })
    console.log(keyWord);

  }


  return (
    <div className='container'>
      <form
        className='searchForm__container'
        onSubmit={handleFindFilms}
      >
        <div className='searchForm__search-string'>
          <input
            className='searchForm__input'
            id='input'
            name='input'
            placeholder='Фильм'
            type='text'
            autoComplete='off'
            onChange={handleKeyWord}
          >
          </input>
          <input
            className='searchForm__icon'
            type='submit'
            value=''
          >
          </input>
        </div>
        <FilterCheckbox
        />
      </form>
    </div>
  )
}

export default SearchForm;
