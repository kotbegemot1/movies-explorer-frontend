import React from 'react';

import "./SearchForm.css"

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <input
          className="search-form__search"
          placeholder="Фильм"
          type="text"
          name="search-input"
          minLength="2"
          maxLength="100"/>
        <button className="search-form__search-button button" type="submit">Поиск</button>

        <label className="search-form__checkbox-wrapper">
          <input
            className="search-form__checkbox"
            type="checkbox"
            id="filter"
            name="filter" />
          <span className="search-form__slider"></span>
          <span className="search-form__text">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}