import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationSite.css'
import '../Navigation.css'
// import { useState } from 'react';

export default function NavigationMovies() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <nav className="navigation">
      <div onClick={toggleMenu} className="navigation__burger-menu button">
        <div className="navigation__burger-lane"></div>
        <div className="navigation__burger-lane"></div>
        <div className="navigation__burger-lane"></div>
      </div>
      <ul className={`navigation__items ${isMenuOpen ? "navigation__items_active" : ""}`}>
        <button onClick={toggleMenu} type='button'className="navigation__close-btn button"></button>
      <li className="navigation__item navigation__item_type_mobile">
          <NavLink
            to='/'
            className={({isActive}) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>
            Главная
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to='/movies'
            className={({isActive}) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to='/saved-movies'
            className={({isActive}) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to='/profile'
            className={({isActive}) => `navigation__link navi navigation__button link ${isActive ? "navigation__link_active" : ""}`}>
            Аккаунт
            <p className="navigation__profile-icon"></p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}