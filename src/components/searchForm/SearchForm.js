import React from 'react';
import FilterCheckbox from '../filterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm() {
  return (
    <div className='container'>
      <form className='searchForm__container'>
        <div className='searchForm__search-string'>
          <input
            className='searchForm__input'
            id='input'
            name='input'
            placeholder='Фильм'
            type='text'
            autoComplete='off'
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
