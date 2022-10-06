import React from 'react';

import './NavTab.css';

function NavTab(props) {



  return (
    <section className='navTab__container'>
      <button
      onClick={props.handleScroll}
       className='navTab__button'>
        Узнать больше
      </button>
    </section>
  );
}

export default NavTab;
