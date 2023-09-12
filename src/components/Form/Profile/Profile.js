import React, { useState, useContext, useEffect } from 'react';

import './Profile.css';
import Header from '../../Header/Header';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

import { REGEX_NAME, SUCCES_PROFILE_MESSAGE, SMTHNG_WRONG_MESSAGE } from '../../../utils/constants';

export default function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  const [btnDeactivate, setBtnDeactivate] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();


  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setBtnDeactivate(true);
    } else {
      setBtnDeactivate(false);
    }
  }, [currentUser, values])

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    props.editProfile(values)
  }

  return (
    <>
      <Header {...props} />
      <main>
        <div className="profile">
          <form className="profile__container" onSubmit={handleSubmit} noValidate>
            <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
            <div className="profile__input-container">
              <label className="profile__label-text">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                pattern={REGEX_NAME}
                id="name-input"
                value={values.name || ''}
                minLength="2"
                maxLength="20"
                placeholder="Введите имя"
                onChange={handleChange}
              />
          <span className="name-input-error form__input-error form__input-error_type_profile">{errors.name}</span>
            </div>
            <div className="profile__input-container">
              <label className="profile__label-text">E-mail </label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email-input"
                value={values.email || ''}
                minLength="2"
                maxLength="20"
                placeholder="Введите пароль"
                onChange={handleChange} />
          <span className="name-input-error form__input-error form__input-error_type_profile">{errors.email}</span>

            </div>
            <span className='form__api-message form__api-message_type_succes'>{props.apiSucces && SUCCES_PROFILE_MESSAGE}</span>
            <span className='form__api-message'>{props.apiMessage && `${SMTHNG_WRONG_MESSAGE} ${props.apiMessage}`}</span>
            <button
              className={`profile__edit-btn button ${!isValid || btnDeactivate ? "button_deactivate" : ""}`}
              type='submit'
            >Редактировать
            </button>
            <button
              className="profile__logout-btn button"
              type='button'
              onClick={props.onSignOut}
            >Выйти из аккаунта
            </button>
          </form>
        </div>
      </main>
    </>
  )
}