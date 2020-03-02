import React, { Component } from 'react';
import JokeForm from '../JokeForm/JokeForm';
import SafeJoke from '../SafeJoke/SafeJoke'
import NSFWJoke from '../NSFWJoke/NSFWJoke';
import Favorites from '../Favorites/Favorites';
import { getRandomJoke } from '../apiCalls';
import { getSpecificJoke } from '../apiCalls';
import { setJoke } from '../Actions';
import { favoriteJoke } from '../Actions';
import { connect } from 'react-redux';
import './MainPage.scss';

export class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      clickedButton: ''
    }
  }

  setClickedButton = (e) => {
    this.setState({clickedButton: e.target.value})
  }

  determinePageDisplay = () => {
    switch(this.state.clickedButton) {
      case 'nsfw':
        return <JokeForm findClickedBtn={this.setClickedButton}/>
      case 'safejoke':
        return <SafeJoke grabJoke={this.grabRandomJoke} favoriteJoke={this.addJokeToFavorites}/>
      case 'getJoke':
        return <NSFWJoke joke={this.props.joke} getNextJoke={this.grabNSFWJoke} favoriteJoke={this.addJokeToFavorites}/>
      case 'favorites':
        return <Favorites />
      default:
        return <h3 className='intro'>Welcome to JOKESTAR!</h3>
    }
  }

  grabRandomJoke = async () => {
    let promiseJoke = await getRandomJoke()
    this.props.updateJoke(promiseJoke)
    return promiseJoke;
  }

  addJokeToFavorites = (e) => {
    this.props.favoriteJoke(this.props.joke)
  }

  grabNSFWJoke = async () => {
    let promiseJoke = await getSpecificJoke(this.props.fetchParams)
    this.props.updateJoke(promiseJoke)
    return promiseJoke
  }

  render() {
    return (
      <section className='users-main-page'>
        <aside className='user-features-section'>
          <button className='feature-button' value='safejoke' onClick={(event) => this.setClickedButton(event)}>Safe Jokes</button>
          <button className='feature-button' value='nsfw' onClick={(event) => this.setClickedButton(event)}>NSFW</button>
          <button className='feature-button' value='favorites' onClick={(event) => this.setClickedButton(event)}>Favorites</button>
          <button className='feature-button' value='clickMe' onClick={(event) => this.setClickedButton(event)}>Click Me</button>
        </aside>
        <section className='display-content-section'>
          {this.determinePageDisplay()}
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  joke: state.joke,
  fetchParams: state.fetchParams
})

export const mapDispatchToProps = dispatch => ({
  updateJoke: joke => dispatch(setJoke(joke)),
  favoriteJoke: joke => dispatch(favoriteJoke(joke)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);