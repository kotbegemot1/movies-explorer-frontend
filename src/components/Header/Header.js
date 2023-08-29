import React from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css'
import NavigationMain from '../Navigation/NavigationAuth/NavigationAuth'
import NavigationMovies from '../Navigation/NavigationSite/NavigationSite'
import Logo from '../Logo/Logo'

export default function Header() {

  const location = useLocation();
  
  const boolenVal = location.pathname !== '/' ? true : false
  
  const headerClassName = `header ${boolenVal && 'header_type_black'}`  
  
  return (
    <header className={headerClassName}>
      <div className="header__container">
      <Logo />
      {boolenVal ?
      <NavigationMovies /> :
      <NavigationMain />
      }

      </div>
    </header>
    )
}