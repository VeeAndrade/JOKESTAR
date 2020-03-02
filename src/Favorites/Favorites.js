import React from 'react';
import './Favorites.scss';
import FavoriteJoke from '../FavoriteJoke/FavoriteJoke'
import { connect } from 'react-redux';

export const Favorites = (props) => {
  let favoritesArray = props.favorites.map(favorite => <FavoriteJoke key={favorite.id} jokeObj={favorite}/>)
  return (
    <section className='favorites-container'>
      {favoritesArray}
    </section>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites);