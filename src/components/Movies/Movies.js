import React from 'react';

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

// import Preloader from "../Preloader/Preloader"

export default function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  )
}