import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Form/Register/Register'
import Login from '../Form/Login/Login'
import Profile from '../Form/Profile/Profile'
import NotFound from '../NotFound/NotFound'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  // console.log(isBurgerMenuOpen);

  function handleBurgerMenu() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className={`App ${isBurgerMenuOpen ? 'App_active' : ''}`}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/movies"
          element={
            <Movies
              burgerToggle={handleBurgerMenu}
            />}
        />
        <Route path="/saved-movies"
          element={
            <SavedMovies
              burgerToggle={handleBurgerMenu}
            />}
        />
        <Route path="/profile"
          element={
            <Profile
              burgerToggle={handleBurgerMenu}
            />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BurgerMenu
        burgerToggle={handleBurgerMenu}
        burgerState={isBurgerMenuOpen} />
    </div>
  );
}

export default App;
