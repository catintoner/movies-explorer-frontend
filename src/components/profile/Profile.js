import React from 'react';

import Header from '../header/Header';

import './Profile.css';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [infoEdit, setInfoEdit] = React.useState(false);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleEditActivate(evt) {
    evt.preventDefault();
    if (!infoEdit) {
      setInfoEdit(true);
    } else {
      setInfoEdit(false);
    }
  }

  function handleInputChange(evt, setInput) {
    setInput(evt.target.value);
    console.log(name, email);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.handleUpdateUserInfo({ name, email });
    setInfoEdit(false);
  }

  return (
    <>
      <header>
        <Header
          loggedIn={props.loggedIn}
        />
      </header>
      <main className='profile__main'>
        <form
          className='profile__form'
          onSubmit={onSubmit}
        >
          <h1 className='form__title'>
            Привет, {currentUser.name}!
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
              defaultValue={currentUser.name}
              id='name_edit'
              type='text'
              autoComplete='off'
              disabled={!infoEdit}
              onChange={(evt) =>
                handleInputChange(evt, setName)
              }
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
              defaultValue={currentUser.email}
              autoComplete='off'
              disabled={!infoEdit}
              onChange={(evt) =>
                handleInputChange(evt, setEmail)
              }
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
            type={!infoEdit ? 'button' : 'submit'}
            value='Редактировать'
            onClick={!infoEdit ? handleEditActivate : null}
          >
          </input>
        </form>
        <button
          type='button'
          className='profile__exit-btn'
          hidden={infoEdit}
          onClick={props.handleLogout}
        >
          Выйти из профиля
        </button>
      </main>
    </>
  );
}

export default Profile;
