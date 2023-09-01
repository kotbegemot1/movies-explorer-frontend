import React from 'react';

import './Techs.css';

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
      <h2 className="title title_type_black">Технологии</h2>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      <div className="techs__item-list">
        <p className="techs__item">HTML</p>
        <p className="techs__item">CSS</p>
        <p className="techs__item">JS</p>
        <p className="techs__item">React</p>
        <p className="techs__item">Git</p>
        <p className="techs__item">Express.js</p>
        <p className="techs__item">MongoDB</p>
      </div>
      </div>
    </section>
  )
}