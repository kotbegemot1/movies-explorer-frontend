import React from 'react';

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

// import Preloader from "../Preloader/Preloader"

export default function Movies(props) {
  // console.log(props.burgerState);
  return (
    <>
      <Header burgerToggle = {props.burgerToggle} />
      <main>
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  )
}