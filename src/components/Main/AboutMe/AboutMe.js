import React from 'react';

import './AboutMe.css';
import avatar from '../../../images/ava.jpg'

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="title">Студент</h2>
        <img className="about-me__image" alt='Фото студента' src={avatar} />
        <h2 className="about-me__subtitle">Евгений</h2>
        <p className="about-me__profession-text">Фронтенд-разработчик, 33 года</p>
        <p className="about-me__description">Я родился в Воркуте, закончил факультет информационных технологий. Люблю кататься на велосипеде. Хочу найти интересную работу, где я научусь новому.</p>
        <a
          href="https://github.com/kotbegemot1"
          className="about-me__link link"
          rel="noreferrer"
          target="_blank">Github</a>
      </div>
    </section>
  )
}