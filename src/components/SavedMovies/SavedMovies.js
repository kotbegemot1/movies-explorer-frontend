import React, { useState } from 'react';
import './SavedMovies.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

// import Preloader from "../Preloader/Preloader"

export default function SavedMovies() {

  const [isSavedMovies, setIsSavedMovies] = useState(true);

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList isSaved={isSavedMovies} />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  )
}