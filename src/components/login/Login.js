import React from 'react';
import SignForm from '../signForm/SignForm';

import './Login.css';

import { auth } from '../../utils/Auth';
import { useHistory } from 'react-router-dom';

function Login(props) {

  const history = useHistory();

  const [errorMessage, setErrorMessage] = React.useState('');

  function handleLoginSubmit(email, password) {
    auth.loginUser(email, password)
      .then((userId) => {
        localStorage.setItem('userId', userId);
        props.setLoggedIn(true);
        history.push('/movies');
      })

      .catch((message) => {
        setErrorMessage(message);
      })
  }

  return (
    <SignForm
      title='Рады видеть!'
      submitName='Войти'
      lastInputErrorClass='login-form__error'
      quoteFooter='Еще не зарегистрированы?'
      footerLink='/sign-up'
      footerLinkName='Регистрация'
      onSubmit={handleLoginSubmit}
      errorMessage={errorMessage}
    />
  );
}

export default Login;
