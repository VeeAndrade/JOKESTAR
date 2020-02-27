import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <h1 className='nav-title'>🌟JOKE<span>STAR</span></h1>
      <NavLink to='/login'>
        <button className='nav-login-button'>Login</button>
        </NavLink>
        
    </nav>
  )
}

export default Nav;