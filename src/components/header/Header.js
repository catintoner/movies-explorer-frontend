import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import './Header.css';

function Header(props) {
  return (
    <nav className='header__navigation'>
      <ul className='header__links'>
        <li className={
          `header__logo ${props.loggedIn && 'header__logo_type_loggedIn'}`
        }>
          <Link
            to={'/'}
            className='header__link logo'
          >
          </Link>
        </li>
        {props.loggedIn ?
          <>
            <li className='nav__films'>
              <NavLink
                to={'/movies'}
                className='header__link'
                activeClassName='header__link_type_active'
              >
                Фильмы
              </NavLink>
            </li>

            <li className='nav__films nav__films_type_saved'>
              <NavLink
                to={'/saved-movies'}
                className='header__link'
                activeClassName='header__link_type_active'
              >
                Сохраненные фильмы
              </NavLink>
            </li>

            <li className='nav__profile'>
              <Link
                to={'/profile'}
                className='header__link header__link_type_profile'
              >
                <p className='profile__name'>
                  Аккаунт
                </p>
                < div className='profile__logo'>
                </div>
              </Link>
            </li>
          </>

          :

          <>
            <li className='nav__signup'>
              <Link
                to={'/sign-up'}
                className='header__link header__link_type_signup'
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
          </>
        }
      </ul>
    </nav >
  )
}

export default withRouter(Header);
