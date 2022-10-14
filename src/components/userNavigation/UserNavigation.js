import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import 'UserNavigation.css';

function UserNavigation(props) {
  return (
    <div className={`user__navigation ${props.burgerChecked && 'user__navigation_type_active'}`}>
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
    </div>
  );
}

export default UserNavigation;
