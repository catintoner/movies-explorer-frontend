import React from 'react';

import Header from '../header/Header';

import './Profile.css';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { auth } from '../../utils/Auth';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [infoEdit, setInfoEdit] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState('');

  const [values, setValues] = React.useState(currentUser);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleEditActivate(evt) {
    evt.preventDefault();
    if (!infoEdit) {
      setInfoEdit(true);
    } else {
      setInfoEdit(false);
    }
  }

  function handleUpdateUserInfo(name, email) {
    mainApi.updateUserInfo(name, email)
      .then((modifiedUserInfo) => {
        props.setCurrentUser(modifiedUserInfo);
        props.setPopupState(true);
        setErrorMessage('');
      })

      .catch((message) => {
        setErrorMessage(message);
      })
  }

  function handleLogout() {
    auth.logoutUser()
      .then(() => {
        localStorage.clear();
        props.setLoggedIn(false);
      })

      .catch((err) => {
        console.log(err);
      })
  }


  function handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('.profile__form').checkValidity());
  }

  function onSubmit(evt) {
    evt.preventDefault();
    handleUpdateUserInfo(values);
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
              name='name'
              type='text'
              autoComplete='off'
              disabled={!infoEdit}
              onChange={handleInputChange}
              required
              minLength={2}
              maxLength={30}
            >
            </input>
            <span
              className={`form__error ${!errors.name && 'form__error_type_hidden'}`}
            >
              {errors.name}
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
              name='email'
              defaultValue={currentUser.email}
              autoComplete='off'
              disabled={!infoEdit}
              onChange={handleInputChange}
              required
              type='email'
            >
            </input>
            <span
              className={`form__error ${!errors.email && 'form__error_type_hidden'}`}
            >
              {errors.email}
            </span>
          </div>
          <p className='form__error'>
            {errorMessage}
          </p>
          <input
            className={`form__submit ${infoEdit && 'form__submit_type_active'} ${(!isValid && infoEdit) && 'form__submit_type_disabled'}`}
            type={!infoEdit ? 'button' : 'submit'}
            value='Редактировать'
            onClick={!infoEdit ? handleEditActivate : null}
            disabled={!infoEdit ? false : (!isValid ? true : false)}
          >
          </input>
        </form>
        <button
          type='button'
          className='profile__exit-btn'
          hidden={infoEdit}
          onClick={handleLogout}
        >
          Выйти из профиля
        </button>
      </main>
    </>
  );
}

export default Profile;
