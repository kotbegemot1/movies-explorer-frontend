import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationAuth.css'
import '../Navigation.css'

export default function NavigationMain() {
  return (
    <nav className="navigation-auth">
      <ul className="navigation-auth__items">
        <li className="navigation-auth__item">
          <Link
            to='/signup'
            className="navigation-auth__link link">
            Регистрация
          </Link>
        </li>
        <li className="navigation-auth__item">
          <Link
            to='/signin'
            className="navigation-auth__link navigation-auth__button button">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  )
}