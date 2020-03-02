export const getRandomJoke = () => {
  return fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: getRandomJoke throw error')
      }
      return response.json()
    }
  )
}

export const getFeaturedJokes = category => {
  return fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: getRandomJoke throw error')
      }
      return response.json()
    }
  )
}

export const getSpecificJoke = (state) => {
  let options = Object.assign({}, {blacklistFlags:state.blacklistFlags, type:state.type})
  return fetch(`https://sv443.net/jokeapi/v2/joke/${state.category}`, options)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: getSpecificJoke throw error')
      }
      return response.json()
    }
  )
}