import React from 'react';
import './Joke.scss';

const Joke = jokeObj => {
  const { setup, joke, punchline, delivery } = jokeObj.joke
  return(
    <article className='joke-wrapper'>
      <h3 className='joke-setup'>{setup || joke}</h3>
      <p className='joke-punchline'>{punchline || delivery}</p>
    </article>
  )
}

export default Joke;