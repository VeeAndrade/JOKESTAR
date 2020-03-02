import React from 'react';
import './Favorites.scss';
import FavoriteJoke from '../FavoriteJoke/FavoriteJoke'
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites)
  let favoritesArray = favorites.map(favorite => <FavoriteJoke jokeObj={favorite}/>)
  return (
    <section className='favorites-container'>
      {favoritesArray}
    </section>
  )
}

export default Favorites;