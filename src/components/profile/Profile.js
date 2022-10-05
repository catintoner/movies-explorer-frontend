import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

import './Profile.css';

function Profile(props) {

  React.useEffect(
    () => {
      props.setLoggedIn(true);
    }
  );

  return (
    <>
      <header>
        <Header
          loggedIn={props.loggedIn}
        />
      </header>
      <main className='profile__main'>
        <form className='profile__form'>
          <h1 className='form__title'>
            Привет, Дмитрий!
          </h1>
          <div className='form__field'>
            <label
              className='form__label'
              htmlFor='name_edit'
            >
              Имя
            </label>
            <input
              className='form__input'
              defaultValue="Дмитрий"
              id='name_edit'
              type='text'
              autoComplete='off'
            >
            </input>
            <span
              className='form__error'
            >
              Какая-то ошибка, например
            </span>
          </div>
          <div className='form__field'>
            <label
              className='form__label'
              htmlFor='email_edit'
            >
              E-mail
            </label>
            <input
              className='form__input'
              id='email_edit'
              defaultValue='www.ya.ru'
              autoComplete='off'
            >
            </input>
            <span
              className='form__error'
            >
              Какая-то ошибка, например
            </span>
          </div>
          <input
          className='form__submit'
          type='submit'
          value='Редактировать'
          >
          </input>
        </form>
        <Link
          to='/'
          className='profile__exit-btn'
        >
          Выйти из профиля
        </Link>
      </main>
    </>
  );
}

export default Profile;
