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

  const [infoEdit, setInfoEdit] = React.useState(false);

  function handleEditActivate() {
    if (!infoEdit) {
      setInfoEdit(true);
    } else {
      setInfoEdit(false);
    }
  }

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
              disabled={!infoEdit}
            >
            </input>
            <span
              className='form__error form__error_type_hidden'
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
              disabled={!infoEdit}
            >
            </input>
            <span
              className='form__error form__error_type_hidden'
            >
              Какая-то ошибка, например
            </span>
          </div>
          <input
          className={`form__submit ${infoEdit && 'form__submit_type_active'}`}
          type='submit'
          value='Редактировать'
          onClick={handleEditActivate}
          >
          </input>
        </form>
        <Link
          to='/'
          className='profile__exit-btn'
          hidden={infoEdit}
        >
          Выйти из профиля
        </Link>
      </main>
    </>
  );
}

export default Profile;
