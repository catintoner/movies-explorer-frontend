import React from 'react';

import FilterCheckbox from '../filterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm(props) {


  return (
    <div className='container'>
      <form
        className='searchForm__container'
        onSubmit={props.handleSearchMovies}
      >
        <div className='searchForm__search-string'>
          <input
            className='searchForm__input'
            id='input'
            name='input'
            placeholder='Фильм'
            type='text'
            autoComplete='off'
            value={props.keyWord}
            onChange={(evt) => props.handleKeyWord(evt)}
          >
          </input>
          <input
            className='searchForm__icon'
            type='submit'
            value=''
            onClick={props.KeyWord}
          >
          </input>
        </div>
        <FilterCheckbox
          searchWithShorty={props.searchWithShorty}
          checked={props.checked}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
        />
      </form>
    </div>
  )
}

export default SearchForm;
