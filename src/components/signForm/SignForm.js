import React from 'react';

import { Link } from 'react-router-dom';

import './SignForm.css';

function SignForm(props) {

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleInputChange(evt, setInput) {
    setInput(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (props.name) {
      props.onSubmit(email, password, props.name);
    } else {
      props.onSubmit(email, password);
    }
  }

  return (
    <section className='sign__container'>
      <header className='sign__header'>
        <Link
          className='sign__logo'
          to='/'
        />
        <h1 className='sign__title'>
          {props.title}
        </h1>
      </header>
      <main className='sign__main'>
        <form className='sign-form__container'
          onSubmit={handleSubmit}
        >
          {props.children}
          <label
            htmlFor='sign-email'
            className='sign-form__label'
          >
            E-mail
          </label>
          <input
            className='sign-form__input'
            type='email'
            id='sign-email'
            autoComplete='off'
            onChange={(evt) => handleInputChange(evt, setEmail)}
          >
          </input>
          <span className='sign-form__error sign-form__error_type_hidden'>
            Что-то пошло не так...
          </span>
          <label
            htmlFor='sign-password'
            className='sign-form__label'
          >
            Пароль
          </label>
          <input
            className='sign-form__input'
            type='password'
            id='sign-password'
            autoComplete='off'
            onChange={(evt) => handleInputChange(evt, setPassword)}
          >
          </input>
          <span className={`sign-form__error ${props.lastInputErrorClass}`}>
            Что-то пошло не так...
          </span>
          <input
            className='sign-form__submit'
            type='submit'
            value={props.submitName}
          >
          </input>
        </form>
      </main>
      <footer className='sign__footer'>
        <p className='sign__quote'>{props.quoteFooter}</p>
        <Link
          className='sign__link'
          to={props.footerLink}
        >
          {props.footerLinkName}
        </Link>
      </footer>
    </section>
  );
}

export default SignForm;
