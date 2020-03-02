export const updateUser = (username) => ({
  type: 'UPDATE_USER',
  username
})

export const setJoke = (joke) => ({
  type: 'SET_JOKE',
  joke
})

export const favoriteJoke = (joke) => ({
  type: 'FAVORITE_JOKE',
  joke
})