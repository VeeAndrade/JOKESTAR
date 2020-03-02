import * as actions from './index';

describe('actions', () => {

  it('should have a type UPDATE_USER', () => {
    const username = 'KillerKitty'
    const expectedAction = {
      type: 'UPDATE_USER',
      username
    }
    const result = actions.updateUser(username)
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_JOKE', () => {
    const joke = {
      "id": 118,
      "type": "general",
      "setup": "How did Darth Vader know what Luke was getting for Christmas?",
      "punchline": "He felt his presents."
    }
    const expectedAction = {
      type: 'SET_JOKE',
      joke
    }
    const result = actions.setJoke(joke)
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of FAVORITE_JOKE', () => {
    const joke = {
      "id": 118,
      "type": "general",
      "setup": "How did Darth Vader know what Luke was getting for Christmas?",
      "punchline": "He felt his presents."
    }
    const expectedAction = {
      type: 'FAVORITE_JOKE',
      joke
    }
    const result = actions.favoriteJoke(joke)
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_PARAMS', () => {
    const stateObj = {
      category: 'Any',
      blacklistFlags: ['nsfw'],
      type: ['single']
    }
    const expectedAction = {
      type: 'ADD_PARAMS',
      stateObj
    }
    const result = actions.addFetchParams(stateObj)
    expect(result).toEqual(expectedAction);
  });
});