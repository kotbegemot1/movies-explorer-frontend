import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__text-copyright">&copy; 2023</p>
        <nav className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link link"
            target="_blank"
            rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/kotbegemot1"
            className="footer__link link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </nav>
      </div>
    </footer>
  )
}