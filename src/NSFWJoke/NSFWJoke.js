import React from 'react';
import Joke from '../Joke/Joke';
import { useSelector } from 'react-redux';

const NSFWJoke = (props) => {
  const joke = useSelector(state => state.joke)
  return (
    <section className='safe-joke-container'>
      <section className='joke-section'>
        <Joke joke={joke}/>
      </section>
      <section className='buttons-section'>
        <button className='favorite-btn' onClick={props.favoriteJoke}>Favorite</button>
        <button className='next-joke-btn' onClick={props.getNextJoke}>Next Joke</button>
      </section>
    </section>)
}

export default NSFWJoke;