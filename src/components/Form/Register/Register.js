import React from 'react';

import '../Form.css';
import Form from '../Form';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

import { REGEX_NAME } from '../../../utils/constants';

export default function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password);
  }

  return (
    <main>
      <Form
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        linkText="Уже зарегистрированы?"
        linkName="Войти"
        path="/signin"
        apiMessage={props.apiMessage}
        isLoading={props.isLoading}
        isValid={isValid}
        onSubmit={handleSubmit}
      >
        <div className="form__input-container">
          <label className="form__input-label">Имя</label>
          <input
            className="form__input"
            type="text"
            name="name"
            pattern={REGEX_NAME}
            id="name-input"
            minLength="2"
            maxLength="20"
            autoComplete="off"
            placeholder="Введите имя"
            value={values.name || ''}
            onChange={handleChange}
            required />
          <span className="name-input-error form__input-error">{errors.name}</span>
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
            autoComplete="off"
            placeholder="Введите email"
            value={values.email || ''}
            onChange={handleChange}
            required />
          <span className="email-input-error form__input-error">{errors.email}</span>
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
          <span className="password-input-error form__input-error">{errors.password}</span>
        </div>
      </Form>
    </main>
  )
}