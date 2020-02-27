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

//fetch apis will be defined by the type they are, 
//either single, twopart, or general
//single and two part are the NSFW
//general, programming, 'knock-knock' is safe API