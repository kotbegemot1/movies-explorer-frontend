import React, { useEffect, useState } from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from '../../utils/MoviesApi';
import { handleFilterAllMovies, handleShortMovies } from '../../utils/supportFunctions';


export default function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [notFoundMovies, setNotFoundMovies] = useState(false);
  const [shortMoviesActive, setShortMoviesActive] = useState(false);
  const [requestError, setRequestError] = useState(false);


  function handleMoviesFilter(queryWord, movies) {
    let moviesFilter = handleFilterAllMovies(queryWord, movies)
    if (moviesFilter.length === 0) {
      console.log(moviesFilter);
      setNotFoundMovies(true);
    } else {
      if (shortMoviesActive) {
        moviesFilter = handleShortMovies(moviesFilter);
      }
      setNotFoundMovies(false);
      setMovies(moviesFilter);
    }
  }

  function searchMovies(queryWord) {
    localStorage.setItem('queryWord', queryWord)
    localStorage.setItem('shortMoviesActive', shortMoviesActive)
    setRequestError(false);
    setMovies([]);
    if (localStorage.getItem('movies')) {
      handleMoviesFilter(queryWord, JSON.parse(localStorage.getItem('movies')));
      return;
    }
    props.setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        handleMoviesFilter(queryWord, movies);
      })
      .catch(err => {
        console.log(err);
        setRequestError(true);
      })
      .finally(() => props.setIsLoading(false))
  }

  function shortMoviesHandler() {
    setShortMoviesActive(!shortMoviesActive);
    localStorage.setItem('shortMoviesActive', shortMoviesActive);

  }

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      handleMoviesFilter(
        localStorage.getItem('queryWord'),
        JSON.parse(localStorage.getItem('movies')),
        localStorage.getItem('shortMoviesActive'))
    }
  }, [shortMoviesActive])

  return (
    <>
      <Header {...props} />
      <main>
        <SearchForm
          onSubmit={searchMovies}
          onChange={shortMoviesHandler}
          shortMoviesActive={shortMoviesActive} />
        <MoviesCardList
          movies={movies}
          isLoading={props.isLoading}
          notFoundMovies={notFoundMovies}
          requestError={requestError}
          saveMovie={props.saveMovie} 
          savedMovies={props.savedMovies}
          deleteMovie={props.deleteMovie}
          queryWord={localStorage.getItem('queryWord')}
          />
      </main>
      <Footer />
    </>
  )
}