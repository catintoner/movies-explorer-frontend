import React from 'react';

import './AboutProject.css';

function AboutProject() {

  return (
    <section className='aboutProject__container'>
      <h2 className='aboutProject__title'>
        О проекте
      </h2>
      <section className='aboutProject__info'>
        <article className='aboutProject__description'>
          <h3 className='description__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='description__info'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </article>
        <article className='aboutProject__description'>
          <h3 className='description__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='description__info'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </section>
      <section className='aboutProject__deadlines'>
        <ul className='deadlines__info'>
          <li className='deadlines__term deadlines__term_type_backend'>
            1 неделя
          </li>
          <li className='deadlines__quote'>
            Back-end
          </li>
        </ul>
        <ul className='deadlines__info'>
          <li className='deadlines__term deadlines__term_type_frontend'>
            4 недели
          </li>
          <li  className='deadlines__quote'>
            Front-end
          </li>
        </ul>
      </section>
    </section>
  )
}

export default AboutProject;
