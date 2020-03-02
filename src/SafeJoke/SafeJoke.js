import React from 'react';
import Joke from '../Joke/Joke'
import { useSelector } from 'react-redux'

const SafeJoke = (props) => {
  const jokeObj = useSelector(state => state.joke)
  return (
    <section className='safe-joke-container'>
      <section className='joke-section'>
        <Joke joke={jokeObj}/>
      </section>
      <section className='buttons-section'>
        <button className='favorite-btn' onClick={props.favoriteJoke}>Favorite</button>
        <button className='next-joke-btn' onClick={props.grabJoke}>Next Joke</button>
      </section>
    </section>
  )
}

export default SafeJoke;