import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';
import logo from '../../images/logo.svg';
export default function Logo() {
  return (
    <Link to='/'>
      <img className='logo link' src={logo} alt='Изображение логотипа' />
    </Link>
    )
}