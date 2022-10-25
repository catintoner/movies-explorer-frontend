import React from 'react';
import SignForm from '../signForm/SignForm';

import './Login.css';

function Login(props) {
  return (
    <SignForm
      title='Рады видеть!'
      submitName='Войти'
      lastInputErrorClass='login-form__error'
      quoteFooter='Еще не зарегистрированы?'
      footerLink='/sign-up'
      footerLinkName='Регистрация'
      onSubmit={props.onSubmit}
    />
  );
}

export default Login;
