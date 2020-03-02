import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import MainPage from '../MainPage/MainPage';

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

  render() {
    return (
      <main className='main-app'>
        <Nav />
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/main-page' render={() => <MainPage />}/>
        <Route exact path='/login' render={() => <Login />}/>
      </main>
    )
  }
}

export default App;