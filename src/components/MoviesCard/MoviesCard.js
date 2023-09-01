import React from 'react';

import "./MoviesCard.css"
import testImage from '../../images/test_image.png'


export default function MoviesCard(isSavedMovies) {
  console.log(isSavedMovies)

  function handleButtonClickToSave(e) {
    console.log(e.target.classList.toggle('movies-card__button_active'))
  }

  return (
    <article className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">В погоне за Бенкси</h3>
        <p className="movies-card__movie-length">0ч 42м </p>
      </div>
      <img className="movies-card__poster" alt='Постер фильма' src={testImage} />

      {isSavedMovies
        ?
        <button
          type="submit"
          className={'movies-card__button movies-card__button_type_saved button'}>
          Сохранить
        </button>
        :
        <button
          type="submit"
          className={'movies-card__button button'}
          onClick={handleButtonClickToSave}>
          Сохранить
        </button>}
    </article>
  )
}