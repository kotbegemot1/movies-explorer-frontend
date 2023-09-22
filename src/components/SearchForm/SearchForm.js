import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "./SearchForm.css";

import { KEYWORD } from '../../utils/constants';

export default function SearchForm(props) {
  const [isRequestError, setIsRequestError] = useState(false);
  const [queryWord, setQueryWord] = useState('');
  const location = useLocation();

  function handleChangeQuery(e) {
    setQueryWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsRequestError(false)
    if (queryWord.trim().length === 0) {
      setIsRequestError(true)
      return
    }
    props.onSubmit(queryWord);
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('queryWord')) {
      setQueryWord(localStorage.getItem('queryWord'));
    }
  }, [location]);

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit} noValidate>
        <div>
        <input
          className="search-form__search"
          placeholder="Фильм"
          type="text"
          name="search-input"
          value={queryWord || ''}
          onChange={handleChangeQuery}/>
          
        <button className="search-form__search-button button" type="submit">Поиск</button>
        <span className="name-input-error form__input-error form__input-error_type_search ">{isRequestError && KEYWORD}</span>
        </div>

        <label className="search-form__checkbox-wrapper">
          <input
            className="search-form__checkbox"
            type="checkbox"
            id="filter"
            name="filter"
            onChange={props.onChange}
            checked={props.shortMoviesActive}/>
          <span className="search-form__slider"></span>
          <span className="search-form__text">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}