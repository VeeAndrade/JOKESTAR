import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  //if username and password is empty strings, 
  //then just display random jokes, 
  //if user clicks on 'Favorite' or 'Login'
  //prompt up the login page 

  render() {
    return (
      <main className='main-app'>
        <Nav />
        <LandingPage />
        <Route exact path='/login' render={() => <Login />}/>
      </main>
    )
  }
}

export default App;
