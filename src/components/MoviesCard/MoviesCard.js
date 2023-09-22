import React from 'react';
import { useLocation } from 'react-router-dom';

import "./MoviesCard.css";
import timeConverter from '../../utils/timeConverter';
import { MOVIES_API_URL } from '../../utils/constants';


export default function MoviesCard(props) {

  const location = useLocation();

  const movieImage = location.pathname === '/saved-movies' ? props.card.image : MOVIES_API_URL + props.card.image.url



  function onDeleteMovies() {
    props.deleteMovie(props.card)
  }

  function onSaveMovies() {
    if (props.isSavedMovie) {
      props.deleteMovie(props.savedMovies.find((savedMovie) => savedMovie.movieId === props.card.id))
    } else {
      const movieThumbnail = MOVIES_API_URL + props.card.image.formats.thumbnail.url
      const movie = {
        country: props.card.country,
        director: props.card.director,
        duration: props.card.duration,
        year: props.card.year,
        description: props.card.description,
        image: movieImage,
        trailerLink: props.card.trailerLink,
        thumbnail: movieThumbnail,
        movieId: props.card.id,
        nameRU: props.card.nameRU,
        nameEN: props.card.nameEN,
      }
      props.saveMovie(movie)
    }

  }

  return (
    <article className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">{props.card.nameRU}</h3>
        <p className="movies-card__movie-length">{timeConverter(props.card.duration)} </p>
      </div>
      <a href={props.card.trailerLink} className='link' target="_blank" rel="noreferrer">
        <img className="movies-card__poster" alt='Постер фильма' src={movieImage} />
      </a>
      {location.pathname === '/saved-movies'
        ?
        <button
          type="submit"
          className={'movies-card__button movies-card__button_type_saved button'}
          onClick={onDeleteMovies}
        >
          Удалить
        </button>
        :
        <button
          type="submit"
          className={`movies-card__button button ${props.isSavedMovie && 'movies-card__button_active'}`}
          onClick={onSaveMovies}>
          Сохранить
        </button>}
    </article>
  )
}