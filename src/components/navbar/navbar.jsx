import React from 'react';
import './navbar.css';
import logo from '../../utils/imgs/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id='navbar'>
      <Link to={'programacion2_desafio2/'}>
        <img id='logo' src={logo} alt='website logo' />
      </Link>
      <ul id='navbar-items'>
        <Link to={'programacion2_desafio2/faq'}>
          <li className='nav-item'>FAQ</li>
        </Link>
        <Link to={'programacion2_desafio2/products'}>
          <li className='nav-item'>Products</li>
        </Link>
      </ul>
    </nav>
  );
}
