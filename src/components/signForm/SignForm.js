import React from 'react';

import { Link } from 'react-router-dom';

import './SignForm.css';

function SignForm(props) {

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('.sign-form__container').checkValidity());
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (props.name) {
      props.onSubmit(values.email, values.password, props.name);
    } else {
      props.onSubmit(values.email, values.password);
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
            name='email'
            autoComplete='off'
            onChange={handleInputChange}
            pattern='^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$'
            required
            placeholder='example@email.com'
          >
          </input>
          <span className={`sign-form__error ${!errors.email && 'sign-form__error_type_hidden'}`}>
            {errors.email}
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
            name='password'
            autoComplete='off'
            onChange={handleInputChange}
            required
          >
          </input>
          <span className={`sign-form__error ${props.lastInputErrorClass} ${!errors.password && 'sign-form__error_type_hidden'}`}>
            {errors.password}
          </span>
          <p className='sign-form__error sign-form__error_type_server'>
            {props.errorMessage}
          </p>
          <input
            className={`sign-form__submit ${(!isValid && !props.validName) ? 'sign-form__submit_type_disabled' : ''}`}
            type='submit'
            value={props.submitName}
            disabled={(!isValid && !props.validName) && true}
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
