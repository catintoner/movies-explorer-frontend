import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';

import headerLogo from '../../images/header__logo.svg';

function Header() {
  return (
    <section className='header__navigation'>
      <img className='header__logo' src={headerLogo} alt='Лого с улыбающимся смайликом' />
      <nav className='header__account'>
        <ul className='header__links'>
          <li className='nav__signup'>
            <Link
              to={'/sign-up'}
              className='header__link'
            >
              Регистрация

            </Link>
          </li>
          <li className='nav__signin'>
            <Link
              to={'sign-in'}
              className='header__link header__link_type_signin'
            >

              Войти

            </Link>
          </li>
        </ul>
      </nav>


    </section>
  )
}

export default withRouter(Header);
