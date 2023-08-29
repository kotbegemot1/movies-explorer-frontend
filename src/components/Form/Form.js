import React from 'react';
import { Link } from 'react-router-dom';

import './Form.css'
import Logo from '../Logo/Logo'

export default function Form(props) {

  return (
    <div className="form">
        <Logo />
      <form className="form__container">
        <h1 className="form__title">{props.title}</h1>
        <div className="form__inputs-wrapper">
          {props.children}
        </div>
        <button className="form__btn button" type='button'>{props.btnName}</button>
        <p className="form__link-text">{props.linkText}
          <Link className="form__link link" to={props.path}>{props.linkName}</Link>
        </p>
      </form>
    </div>
  )
}