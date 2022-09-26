import React from 'react';
import AboutProject from '../aboutProject/AboutProject';
import Header from '../header/Header';
import NavTab from '../navTab/NavTab';
import Promo from '../promo/Promo';

import './Main.css';

function Main() {
  return (
    <>
      <header className='header'>
        <Header
        />
        <Promo
        />
        <NavTab
        />
      </header>

      <main className='content'>
        <AboutProject
        />
      </main>
    </>
  );
}

export default Main;
