import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationSite.css'
import '../Navigation.css'
// import { useState } from 'react';

export default function NavigationMovies(props) {
  return (
    <nav className="navigation">
      <div onClick={props.burgerToggle} className="navigation__burger-menu button">
        <div className="navigation__burger-lane"></div>
        <div className="navigation__burger-lane"></div>
        <div className="navigation__burger-lane"></div>
      </div>
      <ul className="navigation__items">
        <li className="navigation__item">
          <NavLink
            to='/movies'
            className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to='/profile'
            className={({ isActive }) => `navigation__link navi navigation__button link ${isActive ? "navigation__link_active" : ""}`}>
            Аккаунт
            <p className="navigation__profile-icon"></p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}