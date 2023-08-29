import React from 'react';

import '../Form.css'
import Form from '../Form'

export default function Login() {
  return (
    <main>
      <Form
        title="Рады видеть!"
        btnName="Войти"
        linkText="Ещё не зарегистрированы?"
        linkName="Регистрация"
        path="/signup"
      >
        <div className="form__input-container">
          <label className="form__input-label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            minlength="2"
            maxlength="20" />
          <span className="email-input-error form__input-error"> </span>
        </div>
        <div className="form__input-container">
          <label className="form__input-label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password-input"
            minlength="2"
            maxlength="20" />
          <span className="password-input-error form__input-error">Что-то пошло не так...</span>
        </div>
      </Form>
    </main>
  )
}