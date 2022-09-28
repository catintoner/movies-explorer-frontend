import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import AboutProject from '../aboutProject/AboutProject';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NavTab from '../navTab/NavTab';
import Promo from '../promo/Promo';
import Techs from '../techs/Techs';

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

      <main>
        <AboutProject
        />
        <Techs
        />
        <AboutMe
        />
      </main>
      <footer>
        <Footer
        />
      </footer>
    </>
  );
}

export default Main;
