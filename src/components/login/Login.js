import React from 'react';
import SignForm from '../signForm/SignForm';

import './Login.css';

import { auth } from '../../utils/Auth';
import { useHistory } from 'react-router-dom';

function Login(props) {

  const history = useHistory();

  const [errorMessage, setErrorMessage] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);

  function handleLoginSubmit(email, password) {
    setIsPending(true);
    auth.loginUser(email, password)
      .then((userId) => {
        localStorage.setItem('userId', userId);
        props.setLoggedIn(true);
        history.push('/movies');
        setIsPending(false);
      })

      .catch((message) => {
        setErrorMessage(message);
        setIsPending(false);
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
      isPending={isPending}
    />
  );
}

export default Login;
