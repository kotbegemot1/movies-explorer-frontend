import React from 'react';

import '../Form.css'
import Form from '../Form'

export default function Register() {
  return (
    <main>
      <Form
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        linkText="Уже зарегистрированы?"
        linkName="Войти"
        path="/signin"
      >
        <div className="form__input-container">
          <label className="form__input-label">Имя</label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name-input"
            minLength="2"
            maxLength="20"
            placeholder="Введите имя"
            required />
          <span className="name-input-error form__input-error"></span>
        </div>
        <div className="form__input-container">
          <label className="form__input-label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            minLength="2"
            maxLength="20"
            placeholder="Введите email"
            required />
          <span className="email-input-error form__input-error"></span>
        </div>
        <div className="form__input-container">
          <label className="form__input-label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password-input"
            minLength="2"
            maxLength="20"
            placeholder="Введите пароль"
            required />
          <span className="password-input-error form__input-error">Что-то пошло не так...</span>
        </div>
      </Form>
    </main>
  )
}