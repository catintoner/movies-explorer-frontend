import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className='checkbox__filter'>
      <input
        className='checkbox__toggle'
        type='checkbox'
        id='toggle-button'
        onChange={props.searchWithShorty}
      >
      </input>
      <label
        className='checkbox__toggle-label'
        htmlFor='toggle-button'
      >
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
