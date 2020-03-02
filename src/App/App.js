import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import { updateUser } from '../Actions'
import { connect } from 'react-redux';
import './App.scss';

export class App extends Component {
  constructor() {
    super();
  }

  logoutUser = () => {
    this.props.updateUser('')
  }

  render() {
    return (
      <main className='main-app'>
        <Nav logoutUser={this.logoutUser}/>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/main-page' render={() => <MainPage />}/>
        <Route exact path='/login' render={() => <Login />}/>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  updateUser: username => dispatch(updateUser(username))
})

export default connect(null, mapDispatchToProps)(App);