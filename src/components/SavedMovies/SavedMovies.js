import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { handleFilterAllMovies, handleShortMovies } from '../../utils/supportFunctions';

export default function SavedMovies(props) {
  const [savedQueryWord, setSavedQueryWord] = useState('');
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [notFoundMovies, setNotFoundMovies] = useState(false);
  const [shortMoviesActive, setShortMoviesActive] = useState(false);

  function handleMoviesFilter(savedQueryWord, savedMovies) {
    let moviesFilter = handleFilterAllMovies(savedQueryWord, savedMovies)
    if (moviesFilter.length === 0 && savedMovies.length !== 0 ) {
      setNotFoundMovies(true);
      return moviesFilter
    } else {
      if (shortMoviesActive) {
        moviesFilter = handleShortMovies(moviesFilter)
        if (moviesFilter.length === 0 ) {
          setNotFoundMovies(true);
          return moviesFilter
        }
      }
      setNotFoundMovies(false);
      return moviesFilter;
    }
  }

  function searchMovies(queryWord) {
    setSavedQueryWord(queryWord);
    setFiltredMovies(handleMoviesFilter(queryWord, props.savedMovies));
  }

  function shortMoviesHandler() {
    setShortMoviesActive(!shortMoviesActive);
  }

  useEffect(() => {
    if (props.savedMovies.length >= 0){
      setFiltredMovies(handleMoviesFilter(savedQueryWord, props.savedMovies));
    }
    
  }, [shortMoviesActive, props.savedMovies])


  return (
    <>
      <Header {...props} />
      <main>
        <SearchForm
          onSubmit={searchMovies}
          onChange={shortMoviesHandler}
          shortMoviesActive={shortMoviesActive}
        />
        <MoviesCardList
          savedMovies={filtredMovies ? filtredMovies : props.savedMovies}
          notFoundMovies={notFoundMovies}
          deleteMovie={props.deleteMovie}
          isLoading={props.isLoading}
        />
      </main>
      <Footer />
    </>
  )
}