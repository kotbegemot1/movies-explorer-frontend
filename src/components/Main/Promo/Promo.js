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
        <button className="promo__button button" type="button">
          <a
            href="https://practicum.yandex.ru"
            className="promo__link"
            target="_blank"
            rel="noreferrer">
            Узнать больше
          </a>
        </button>
      </div>

    </section>
  )
}
