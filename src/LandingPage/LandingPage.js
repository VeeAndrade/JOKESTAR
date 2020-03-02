import React, { Component } from 'react';
import Joke from '../Joke/Joke';
import { getRandomJoke } from '../apiCalls';
import { setJoke } from '../Actions'
import { connect } from 'react-redux'
import './LandingPage.scss';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    }
  }

  fetchRandomJoke() {
    getRandomJoke()
    .then(joke => {
      this.props.updateJoke(joke)

      this.setState({error: null})
    })
  }

  checkUser = () => {
    !this.props.username ? this.setState({
      error: '*Login to favorite this joke*'
    }) : console.log('error')
  }

  render() {
    return (
      <section className='landing-page-section'>
        <section className='joke-section'>
          <Joke joke={this.props.joke}/>
        </section>
          <section className='must-login-error-section'>
            <p className='error-msg'>{this.state.error}</p>
          </section>
        <section className='landing-action-buttons'>
          <button className = 'favorite-joke-button' onClick = {() => this.checkUser()}> Favorite </button>
          <button className='next-joke-button' onClick={() => this.fetchRandomJoke()}>Next joke</button>
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  username: state.username,
  joke: state.joke
})

export const mapDispatchToProps = dispatch => ({
  updateJoke: joke => dispatch(setJoke(joke))
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)