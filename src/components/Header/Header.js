import React from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css'
import NavigationAuth from '../Navigation/NavigationAuth/NavigationAuth'
import NavigationSite from '../Navigation/NavigationSite/NavigationSite'
import Logo from '../Logo/Logo'

export default function Header(props) {
  // console.log(props);

  const location = useLocation();
  
  const boolenVal = location.pathname !== '/' ? true : false
  
  const headerClassName = `header ${boolenVal && 'header_type_black'}`  
  
  return (
    <header className={headerClassName}>
      <div className="header__container">
      <Logo />
      {boolenVal ?
      <NavigationSite burgerToggle = {props.burgerToggle} burgerState = {props.burgerState} /> :
      <NavigationAuth />
      }

      </div>
    </header>
    )
}