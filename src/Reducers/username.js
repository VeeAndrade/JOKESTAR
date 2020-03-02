export const username = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.username
    case 'LOGOUT_USER':
      return ''
      default:
        return state;
  }
}