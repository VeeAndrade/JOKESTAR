import React from 'react';
import './FavoriteJoke.scss';

const FavoriteJoke = (jokeObj) => {
  const { id, setup, joke, punchline, delivery } = jokeObj.jokeObj
  return (
    <article key={id}className='favorite-joke-card'>
      <h3 className='setup'>{setup || joke}</h3>
      <p className='punchline'>{punchline || delivery}</p>
    </article>
  )
}

export default FavoriteJoke;