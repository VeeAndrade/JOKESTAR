import { joke } from './joke';

describe('fetchParams', () => {
  it('should return initial state if no state is provided', () => {
    const expected = {
      setup: 'How much does a polarbear weigh?', 
      punchline: 'enough to break the ice'}
    const result = joke(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return the correct array if the action type is FAVORITE_JOKE', () => {
    const mockjoke = {
      "id": 118,
      "type": "general",
      "setup": "How did Darth Vader know what Luke was getting for Christmas?",
      "punchline": "He felt his presents."
    }
    const mockAction = {
      type: 'SET_JOKE',
      joke: mockjoke
    }
    const expected = {
      "id": 118,
      "type": "general",
      "setup": "How did Darth Vader know what Luke was getting for Christmas?",
      "punchline": "He felt his presents."
    }
    const result = joke({}, mockAction)
    expect(result).toEqual(expected)
  });
});