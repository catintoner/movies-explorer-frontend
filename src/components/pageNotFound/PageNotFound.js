import React from 'react';

import './PageNotFound.css';

function PageNotFound(props) {

  return (
    <section className='notFound__container'>
      <h1 className='notFound__title'>
        404
      </h1>
      <p className='notFound__subtitle'>
        Страница не найдена
      </p>
      <button
        className='notFound__back'
        onClick={props.handleReturnBack}
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
