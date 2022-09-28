import React from 'react';

import Portfolio from '../portfolio/Portfolio';

import './AboutMe.css';

import aboutMeAvatar from '../../images/aboutMe__avatar.jpg';


function AboutMe() {
  return (
    <section className='aboutMe__container'>
      <h2 className='aboutMe__title'>
        Студент
      </h2>
      <article className='aboutMe__info'>
        <h3 className='aboutMe__name'>
          Дмитрий
        </h3>
        <p className='aboutMe__subtitle'>
          Тестировщик корпоративных систем, 30 лет
        </p>
        <p className='aboutMe__description'>
          Я родился и живу в городе Сергиев Посад.
          Закончил Московский авиационный институт по
          специальности "Инженерная защита окружающей среды".
          Люблю писать музыку, занимаюсь спортом.
          Когда-то давно, пробовал заниматься программированием сам
          на языке С++. Очень нравилось, хотя всегда казалось,
          что программирование не мое.
          Решил попробовать устроиться в IT-сферу.
          С начала 2021 года работаю в крупной компании в IT-отделе.
          Устроился в тех. поддержку, в конце 2022 года перевели
          на должность Тестировщик.
          После прохождения курса хочу уйти в разработчики и начать
          еще глубже изучать языки программирования.
          Спасибо команде Яндекс.Практикум за поддержку и стимул!
        </p>
        <div className='aboutMe__avatar-container'>
        <img className='aboutMe__avatar' src={aboutMeAvatar} alt='Фото создателя проекта. Молодой улыбающийся парень на фоне природы'/>
        </div>

      </article>
      <Portfolio
      />

    </section>
  );
}

export default AboutMe;
