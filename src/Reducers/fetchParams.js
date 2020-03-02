export const fetchParams = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PARAMS':
      return action.stateObj
    default:
      return state;
  }
}