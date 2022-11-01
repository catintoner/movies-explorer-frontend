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

  function handleUpdateUserInfo(userInfo) {
    if (userInfo.name !== currentUser.name || userInfo.email !== currentUser.email) {
      setErrors({});
      mainApi.updateUserInfo({
        name: userInfo.name,
        email: userInfo.email,
      })
        .then((modifiedUserInfo) => {
          props.setCurrentUser(modifiedUserInfo);
          props.setPopupState(true);
          setErrorMessage('');
        })

        .catch((message) => {
          setErrorMessage(message);
        })
    } else {
      setErrorMessage('Введенные данные совпадают с текущими');
    }

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
    if (target.value === currentUser[name]) {
      setErrors({...errors, [name]: 'Введенные данные совпадают с текущими'});
      setIsValid(false);
    }
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
              pattern='^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$'
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
