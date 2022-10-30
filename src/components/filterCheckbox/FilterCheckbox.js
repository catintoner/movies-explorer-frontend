import React from 'react';
import { useLocation } from 'react-router-dom';

import './FilterCheckbox.css';

function FilterCheckbox(props) {

  const location = useLocation();

  // const [isChecked, setIsChecked] = React.useState(false);

  function handleClickCheck() {
    localStorage.setItem('short', JSON.stringify(!props.isChecked));
    props.searchWithShorty();
    props.setIsChecked(!props.isChecked);
  }

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (localStorage.getItem('short')) {
        props.setIsChecked(JSON.parse(localStorage.getItem('short')));
      }
      return;
    }

    // if (location.pathname === '/saved-movies') {
    //   props.setIsChecked(false);
    // }
  }, [location]);

  return (
    <div className='checkbox__filter'>
      <input
        className='checkbox__toggle'
        type='checkbox'
        id='toggle-button'
        onChange={() => handleClickCheck()}
        checked={props.isChecked}
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
