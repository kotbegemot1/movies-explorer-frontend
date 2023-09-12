import React from 'react';
import { useNavigate } from "react-router-dom";

import './NotFound.css';

export default function NotFound() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main>
      <div className="not-found">
        <div className="not-found__text-container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <button className="not-found__btn button" type="button" onClick={goBack} >Назад</button>
      </div>
    </main>
  )
}