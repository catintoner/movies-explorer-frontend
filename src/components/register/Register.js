import React from 'react';

import SignForm from '../signForm/SignForm';

import './Register.css';

import { auth } from '../../utils/Auth';
import { useHistory } from 'react-router-dom';

function Register(props) {

  const history = useHistory();

  const [errorMessage, setErrorMessage] = React.useState('');


  function handleRegistrationSubmit(email, password, name) {
    auth.createUser(email, password, name)
      .then(() => {
        history.push('/sign-in');
      })

      .catch((message) => {
        setErrorMessage(message);
      })
  }

  const [name, setName] = React.useState('');

  const [error, setError] = React.useState({});
  const [isValidName, setIsValidName] = React.useState(false);

  function handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setName(value);
    setError({ [name]: target.validationMessage });
    setIsValidName(target.closest('.sign-form__container').checkValidity());
  }

  return (
    <SignForm
      title='Добро пожаловать!'
      submitName='Зарегистрироваться'
      lastInputErrorClass='register-form__error'
      quoteFooter='Уже зарегистрированы?'
      footerLink='/sign-in'
      footerLinkName='Войти'
      onSubmit={handleRegistrationSubmit}
      name={name}
      validName={isValidName}
      errorMessage={errorMessage}
    >
      <label
        htmlFor='sign-name'
        className='sign-form__label'
      >
        Имя
      </label>
      <input
        className='sign-form__input'
        type='text'
        id='sign-name'
        name='name'
        autoComplete='off'
        onChange={handleInputChange}
        required
        minLength={2}
        maxLength={30}
      >
      </input>
      <span className={`sign-form__error ${!error.name && 'sign-form__error_type_hidden'}`}>
        {error.name}
      </span>
    </SignForm>
  )
};

export default Register;
