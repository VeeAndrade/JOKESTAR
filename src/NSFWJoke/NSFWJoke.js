import React from 'react';
import './NSFWJoke.scss';
import Joke from '../Joke/Joke';
import { connect } from 'react-redux';

export const NSFWJoke = (props) => {
  return (
    <section className='nsfw-joke-container'>
      <section className='joke-section'>
        <Joke joke={props.joke}/>
      </section>
      <section className='buttons-section'>
        <button className='favorite-btn' onClick={props.favoriteJoke}>Favorite</button>
        <button className='next-joke-btn' onClick={props.getNextJoke}>Next Joke</button>
      </section>
    </section>)
}

export const mapStateToProps = state => ({
  joke: state.joke
})

export default connect(mapStateToProps)(NSFWJoke);