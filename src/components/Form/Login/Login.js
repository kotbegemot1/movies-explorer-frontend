import React from 'react';

import '../Form.css';
import Form from '../Form';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';


export default function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(values);
  }

  return (
    <main>
      <Form
        title="Рады видеть!"
        btnName="Войти"
        linkText="Ещё не зарегистрированы?"
        linkName="Регистрация"
        path="/signup"
        isValid={isValid}
        apiMessage={props.apiMessage}
        isLoading={props.isLoading}
        onSubmit={handleSubmit}
      >
        <div className="form__input-container">
          <label className="form__input-label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            minLength="2"
            maxLength="20"
            autoComplete="off"
            placeholder="Введите email"
            value={values.email || ''}
            onChange={handleChange}
            required />
          <span className="name-input-error form__input-error">{errors.email}</span>
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
            value={values.password || ''}
            onChange={handleChange}
            required />
          <span className="name-input-error form__input-error">{errors.password}</span>

        </div>
      </Form>
    </main>
  )
}