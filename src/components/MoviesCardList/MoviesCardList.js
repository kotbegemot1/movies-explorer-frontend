import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import Preloader from "../Preloader/Preloader";

import useWindowSize from '../../hooks/useWindowSize';

import {
  DISPLAY_WIDTHS,
  QUANTITY_CARDS,
  QUANTITY_CARDS_MORE,
  NOT_FOUND_MESSAGE,
  REQUEST_ERROR
} from '../../utils/constants';

export default function MoviesCardList(props) {
  const [cardQuantity, setCardQuantity] = useState(0)

  const location = useLocation();

  const width = useWindowSize();

  let shownMovies;
  if (props.movies) {
    shownMovies = props.movies.slice(0, cardQuantity);
  }


  useEffect(() => {
    if (width >= DISPLAY_WIDTHS.large) {
      setCardQuantity(QUANTITY_CARDS.desk)
    } else if (width < DISPLAY_WIDTHS.large && width >= DISPLAY_WIDTHS.middle) {
      setCardQuantity(QUANTITY_CARDS.tablet)
    } else {
      setCardQuantity(QUANTITY_CARDS.mobile)
    }
  }, [width, props.queryWord]);

  function handleBtnMore() {
    if (width >= DISPLAY_WIDTHS.large) {
      setCardQuantity(count => count + QUANTITY_CARDS_MORE.desk)
    } else {
      setCardQuantity(count => count + QUANTITY_CARDS_MORE.tablet)
    }
  }

  function checkBtnVisible() {
    if (cardQuantity >= props.movies.length) {
      return true
    }
    return false
  }

  function checkMovieStatus(savedMovies, card) {
    return savedMovies.some((savedMovie) => savedMovie.movieId === card.id) ? true : false
  }

  return (
    <section className="movies-card-list">

      {props.isLoading && <Preloader />}
      <h1 className='movies-card-list__request-error'>{props.notFoundMovies && NOT_FOUND_MESSAGE}</h1>
      <h1 className='movies-card-list__request-error'>{props.requestError && REQUEST_ERROR}</h1>
      {location.pathname === "/movies" ? (
        <>
          <div className="movies-card-list__container">
            {shownMovies.map((movie) => (
              <MoviesCard
                key={movie.id}
                card={movie}
                isSavedMovie={checkMovieStatus(props.savedMovies, movie)}
                saveMovie={props.saveMovie}
                savedMovies={props.savedMovies}
                deleteMovie={props.deleteMovie}
              />
            ))}
          </div>
          <button
            onClick={handleBtnMore}
            className={`movies-card-list__button button ${checkBtnVisible() ? "movies-card-list__button_deactivate" : ""}`}
            type="button">Ещё</button>
        </>
      ) : (
        <div className="movies-card-list__container">
          {props.savedMovies.map((movie) => (
            <MoviesCard
              key={movie._id}
              card={movie}
              deleteMovie={props.deleteMovie}
            />
          ))}
        </div>
      )}

    </section>
  )
}