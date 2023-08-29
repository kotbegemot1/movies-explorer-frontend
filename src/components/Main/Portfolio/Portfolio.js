import React from 'react';

import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__links">
                <a href="/" className="portfolio__link link" rel="noreferrer" target="_blank">Статичный сайт</a>
                <a href="/" className="portfolio__link link" rel="noreferrer" target="_blank">Адаптивный сайт</a>
                <a href="/" className="portfolio__link link" rel="noreferrer" target="_blank">Одностраничное приложение  </a>
            </nav>
        </section>
    )
}