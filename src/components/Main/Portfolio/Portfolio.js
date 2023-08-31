import React from 'react';

import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__links">
                <a href="https://kotbegemot1.github.io/how-to-learn/" className="portfolio__link link" rel="noreferrer" target="_blank">Статичный сайт</a>
                <a href="https://kotbegemot1.github.io/russian-travel/" className="portfolio__link link" rel="noreferrer" target="_blank">Адаптивный сайт</a>
                <a href="https://last.sprint.front.nomoredomains.xyz/sign-in" className="portfolio__link link" rel="noreferrer" target="_blank">Одностраничное приложение  </a>
            </nav>
        </section>
    )
}