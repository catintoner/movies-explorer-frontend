import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import AboutProject from '../aboutProject/AboutProject';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NavTab from '../navTab/NavTab';
import Promo from '../promo/Promo';
import Techs from '../techs/Techs';

import './Main.css';

function Main(props) {

    //временное решение
    React.useEffect(
      () => {
        props.setLoggedIn(false);
      }
    )

  return (
    <>
      <header className='header'>
        <Header
        loggedIn={props.loggedIn}
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
