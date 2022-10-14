import React from 'react';
import ProjectLink from '../projectLink/ProjectLink';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio__container'>
      <h3 className='portfolio__title'>
        Github
      </h3>
      <p className='portfolio__subtitle'>
        Портфолио
      </p>
      <ul className='portfolio__list'>
        <ProjectLink
        linkUrl='https://catintoner.github.io/how-to-learn/'
        linkName='Статичный сайт'
        />
        <ProjectLink
        linkUrl='https://catintoner.github.io/russian-travel/'
        linkName='Адаптивный сайт'
        />
        <ProjectLink
        linkUrl='https://catintoner.nomorepartiesxyz.ru/'
        linkName='Одностраничное приложение'
        />
      </ul>
    </section>

  );
}

export default Portfolio;
