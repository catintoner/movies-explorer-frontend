import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__quote'>
        <p className='footer__copyright'>
          &copy; 2022
        </p>
        <a className='footer__link'
          href='https://practicum.yandex.ru/'
          target='_blank'
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a className='footer__link'
          href='https://github.com/'
          target='_blank'
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default Footer;
