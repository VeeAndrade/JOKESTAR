export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'FAVORITE_JOKE':
      return [...state, action.joke]
    default:
      return state;
  }
}