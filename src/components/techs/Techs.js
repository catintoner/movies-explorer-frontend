import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <article className='techs'>
      <section className='techs__container'>
        <h2 className='techs__title'>
          Технологии
        </h2>
        <h3 className='techs__subtitle'>
          7 технологий
        </h3>
        <p className='techs__about'>
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <ul className='techs__used-technologies'>
          <li className='techs__technology'>
            HTML
          </li>
          <li className='techs__technology'>
            CSS
          </li>
          <li className='techs__technology'>
            JS
          </li>
          <li className='techs__technology'>
            React
          </li>
          <li className='techs__technology'>
            Git
          </li>
          <li className='techs__technology'>
            Express.js
          </li>
          <li className='techs__technology'>
            MongoDB
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Techs;
