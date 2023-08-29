import React from 'react';

import './Profile.css'
import Header from '../../Header/Header'

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <div className="profile">
          <form className="profile__container">
            <h1 className="profile__title">Привет, Евгений!</h1>
            <div className="profile__input-container">
              <label className="profile__label-text">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name-input"
                value="Евгений" />
            </div>
            <div className="profile__input-container">
              <label className="profile__label-text">E-mail </label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email-input"
                value="pochta@yandex.ru" />
            </div>
            <button className="profile__edit-btn button" type='button'>Редактировать</button>
            <button className="profile__logout-btn button" type='button'>Выйти из аккаунта</button>
          </form>
        </div>
      </main>
    </>
  )
}