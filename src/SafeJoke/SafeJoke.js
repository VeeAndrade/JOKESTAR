import React from 'react';
import Joke from '../Joke/Joke'
import { connect } from 'react-redux';


export const SafeJoke = (props) => {
  return (
    <section className='safe-joke-container'>
      <section className='joke-section'>
        <Joke joke={props.joke}/>
      </section>
      <section className='buttons-section'>
        <button className='favorite-btn' onClick={props.favoriteJoke}>Favorite</button>
        <button className='next-joke-btn' onClick={props.grabJoke}>Next Joke</button>
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  joke: state.joke
})

export default connect(mapStateToProps)(SafeJoke);