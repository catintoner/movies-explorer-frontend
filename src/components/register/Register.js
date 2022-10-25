import React from 'react';

import SignForm from '../signForm/SignForm';

import './Register.css';


function Register(props) {

  const [name, setName] = React.useState('');


  function handleInputChange(evt, setInput) {
    setInput(evt.target.value);
  }

  return (
    <SignForm
      title='Добро пожаловать!'
      submitName='Зарегистрироваться'
      lastInputErrorClass='register-form__error'
      quoteFooter='Уже зарегистрированы?'
      footerLink='/sign-in'
      footerLinkName='Войти'
      onSubmit={props.onSubmit}
      handleInputChange={handleInputChange}
      name={name}
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
        autoComplete='off'
        onChange={(evt) => handleInputChange(evt, setName)}
      >
      </input>
      <span className='sign-form__error sign-form__error_type_hidden'>
        Что-то пошло не так...
      </span>
    </SignForm>
  )
};

export default Register;
