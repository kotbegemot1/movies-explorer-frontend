import React from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import Logo from '../Logo/Logo';

import { SMTHNG_WRONG_MESSAGE } from '../../utils/constants';

export default function Form(props) {

  return (
    <div className="form">
      <Logo />
      <form className="form__container" onSubmit={props.onSubmit} noValidate>
        <h1 className="form__title">{props.title}</h1>
        <div className="form__inputs-wrapper">
          {props.children}
        
        </div>
        <span className='form__api-message'>{props.apiMessage && `${SMTHNG_WRONG_MESSAGE} ${props.apiMessage}`}</span>
        <button
          className={`form__btn button ${!props.isValid ? "button_deactivate" : ""}`}
          disabled={!props.isValid}
          type='submit'
        >{props.btnName}
        </button>
        <p className="form__link-text">{props.linkText}
          <Link className="form__link link" to={props.path}>{props.linkName}</Link>
        </p>
      </form>
    </div>
  )
}