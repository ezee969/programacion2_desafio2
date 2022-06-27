import React from 'react';
import './navbar.css';
import logo from '../../utils/imgs/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-lime-300 to-yellow-200' id='navbar'>
      <Link to={'programacion2_desafio2/'}>
        <img
          className='rounded-full '
          id='logo'
          src={logo}
          alt='website logo'
        />
      </Link>
      <ul className='flex gap-2 font-semibold lg:text-lg xl:text-xl'>
        <Link to={'programacion2_desafio2/faq'}>
          <li>FAQ</li>
        </Link>
        <Link to={'programacion2_desafio2/products'}>
          <li>Products</li>
        </Link>
        <Link to={'programacion2_desafio2/success'}>
          <li>Success</li>
        </Link>
      </ul>
    </nav>
  );
}
