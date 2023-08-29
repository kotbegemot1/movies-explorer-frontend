import React from 'react';

import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="title">О проекте</h2>
      <div className="about-project__description-container">
        <div className="about-project__description">
          <h2 className="about-project__description-title">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <h2 className="about-project__description-title">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__scale-container">
          <p className="about-project__scale">1 неделя</p>
          <p className="about-project__scale about-project__scale_type_front">4 недели</p>
          <h2 className="about-project__scale-info">Back-end</h2>
          <p className="about-project__scale-info">Front-end</p>
      </div>

    </section>
  )
}
