import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.scss';

export const Nav = (props) => {
  return (
    <nav className='main-nav'>
      <h1 className='nav-title'><span role='img' aria-label='icon'>☆</span>JOKE<span>STAR</span></h1>
        {!props.username ?
        <NavLink to='/login' className='nav-login-button'>Login</NavLink> : 
        <NavLink to='/' className='nav-login-button' onClick={props.logoutUser}>Logout</NavLink>}
    </nav>
  )
}

export const mapStateToProps = state => ({
  username: state.username
})

export default connect(mapStateToProps)(Nav);