import React, { Component } from 'react';
import Joke from '../Joke/Joke';
import { getRandomJoke } from '../apiCalls';
import './LandingPage.scss';

//the objective of this component is to have a simple 
//feature that loads up a new joke every time you hit 
//the button but to get more feature, you would need 
//to login to see

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      joke: {
        setup: 'How much does a polarbear weigh?', 
        punchline: 'enough to break the ice'}
    }
  }

  fetchRandomJoke() {
    getRandomJoke()
    .then(joke => {
      this.setState({joke: joke})
    })
  }

  render() {
    return (
      <section className='landing-page-section'>
        <section className='joke-section'>
          <Joke joke={this.state.joke}/>
        </section>
        <section className='landing-action-buttons'>
          <button className='favorite-joke-button'>Favorite</button>
          <button className='next-joke-button' onClick={() => this.fetchRandomJoke()}>Next joke</button>
        </section>
      </section>
    )
  }
}

export default LandingPage