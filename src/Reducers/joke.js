export const joke = (state = {
        setup: 'How much does a polarbear weigh?', 
        punchline: 'enough to break the ice'}, action) => {
  switch (action.type) {
    case 'SET_JOKE':
      return action.joke
    case 'LOGOUT_USER':
      return ''
    default:
      return state;
  }
}