import React from 'react';
import './Joke.scss';

const Joke = joke => {
  const { setup, punchline} = joke.joke
  return(
    <article className='joke-wrapper'>
      <h3 className='joke-setup'>{setup}</h3>
      <p className='joke-punchline'>{punchline}</p>
    </article>
  )
}

export default Joke;