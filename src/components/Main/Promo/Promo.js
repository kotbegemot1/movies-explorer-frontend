import React from 'react';

import './Promo.css';
import landingLogo from '../../../images/landing-logo.png';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__image" alt="Логотип промо" src={landingLogo} />
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a
          href="https://practicum.yandex.ru"
          className="promo__link link"
          target="_blank"
          rel="noreferrer">
          Узнать больше
        </a>
      </div>

    </section>
  )
}
