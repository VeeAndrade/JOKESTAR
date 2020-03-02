import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import './Nav.scss';

const Nav = (props) => {
  const username = useSelector(state => state.username)
  return (
    <nav className='main-nav'>
      <h1 className='nav-title'><span role='img' aria-label='icon'>🌟</span>JOKE<span>STAR</span></h1>
        {!username ?
        <NavLink to='/login'><button className='nav-login-button'>Login</button></NavLink> : 
        <NavLink to='/'><button className='nav-login-button'>Logout</button></NavLink>}
    </nav>
  )
}



export default Nav;