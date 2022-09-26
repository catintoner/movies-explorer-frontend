import React from 'react';

import './Promo.css';

import promoLogo from '../../images/promo__logo.svg';

function Promo() {
  return (
    <section className='promo__container'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className='promo__subtitle'>
        Листайте ниже,
        чтобы узнать больше про этот проект и его создателя.
      </p>
      <img className='promo__logo' src={promoLogo} alt='Изображение планеты из слов WEB' />
    </section>
  );
}

export default Promo;
