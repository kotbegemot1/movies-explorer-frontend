import React from 'react';
import { NavLink } from 'react-router-dom';

import './BurgerMenu.css'

export default function NavigationMovies(props) {
  return (
    <div className={`"navigation navigation-burger" ${props.burgerState ? "navigation-burger_active" : ""}`}>
    <nav className={`navigation__items-container navigation__items-container_type_burger ${props.burgerState ? "navigation__items-container_active" : ""}`}>
      <button onClick={props.burgerToggle} type='button' className="navigation__close-btn navigation__close-btn_type_burger button"></button>

      <ul className="navigation__items navigation__items_type_burger">

        <li className="navigation__item navigation__item_type_burger">
          <NavLink
            to='/'
            className={({ isActive }) => `navigation__link navigation__link_type_burger link ${isActive ? "navigation__link_active" : ""}`}
            onClick={props.burgerToggle}>
            Главная
          </NavLink>
        </li>
        <li className="navigation__item navigation__item_type_burger">
          <NavLink
            to='/movies'
            className={({ isActive }) => `navigation__link navigation__link_type_burger link ${isActive ? "navigation__link_active" : ""}`}
            onClick={props.burgerToggle}>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item navigation__item_type_burger">
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => `navigation__link navigation__link_type_burger link ${isActive ? "navigation__link_active" : ""}`}
            onClick={props.burgerToggle}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__item navigation__item_type_burger">
          <NavLink
            to='/profile'
            className={({ isActive }) => `navigation__link navigation__link_type_burger navi navigation__button link ${isActive ? "navigation__link_active" : ""}`}
            onClick={props.burgerToggle}>
            Аккаунт
            <p className="navigation__profile-icon navigation__profile-icon_type_burger"></p>
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}