import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Form/Register/Register';
import Login from '../Form/Login/Login';
import Profile from '../Form/Profile/Profile';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { mainApi } from '../../utils/MainApi';


function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState('');
  const [apiSucces, setApiSucces] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  function handleBurgerMenu() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleRegister(name, email, password) {
    mainApi.Register(name, email, password)
      .then(() => {
        handleAuth({ email, password });
      })
      .catch((err) => {
        checkApiMessage(err);
        console.log(err);
      })
  }

  function checkApiMessage(err) {
    setApiMessage(err)
    setTimeout(() => {
      setApiMessage('');
    }, 2000);

  }

  function handleAuth(formValue) {
    mainApi.Login(formValue.email, formValue.password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        checkApiMessage(err);
        console.log(apiMessage);
      })
  }

  function handleEditProfile(values) {
    mainApi.editUserInfo(values.name, values.email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setApiSucces(true)
        setTimeout(() => {
          setApiSucces(false);
        }, 2000);
      })
      .catch((err) => console.log(err))
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => console.log(err))
  }

  function handleDeleteMovie(movie) {
    console.log(movie);
    mainApi.deleteMovie(movie._id)
      .then((movie) => {
        setSavedMovies(state => state.filter(m => m.movieId !== movie.movieId));
      })
      .catch((err) => console.log(err))
  }

  function handleSignOut() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        navigate('/', { replace: true })
      })
      .catch((err) => console.log(err))
  }

  const tokenCheck = useCallback(async () => {
    try {
      const user = await mainApi.checkToken();
      if (user) {
        setCurrentUser(user);
        setLoggedIn(true);
        navigate(location.pathname, { replace: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  }, [navigate])

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.checkToken(), mainApi.getMovies()])
        .then(([currentUser, savedMovies]) => {
          setCurrentUser(currentUser);
          setSavedMovies(savedMovies);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <div className={`App ${isBurgerMenuOpen ? 'App_active' : ''}`}>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} burgerToggle={handleBurgerMenu} />} />
          <Route path="/signup" element={
            loggedIn
              ?
              <Navigate to="/movies" replace />
              :
              <Register
                onRegister={handleRegister}
                apiMessage={apiMessage}
              />} />
          <Route path="/signin" element={
            loggedIn
              ?
              <Navigate to="/movies" replace />
              :
              <Login
                onLogin={handleAuth}
                apiMessage={apiMessage}
              />} />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              burgerToggle={handleBurgerMenu}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              saveMovie={handleSaveMovie}
              savedMovies={savedMovies}
              deleteMovie={handleDeleteMovie}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              burgerToggle={handleBurgerMenu}
              isLoading={isLoading}
              savedMovies={savedMovies}
              deleteMovie={handleDeleteMovie}

            />}
          />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              burgerToggle={handleBurgerMenu}
              editProfile={handleEditProfile}
              onSignOut={handleSignOut}
              apiMessage={apiMessage}
              apiSucces={apiSucces}
            />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BurgerMenu
          burgerToggle={handleBurgerMenu}
          burgerState={isBurgerMenuOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
