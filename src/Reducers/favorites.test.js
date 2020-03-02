import { favorites } from './favorites';

describe('favorites', () => {
  it('should return initial state if no state is provided', () => {
    const expected = [];
    const result = favorites(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return the correct array if the action type is FAVORITE_JOKE', () => {
    const mockJoke = {id: 1, setup: 'setup', delivery: 'delivery'}
    const mockAction = {
      type: 'FAVORITE_JOKE',
      joke: mockJoke
    }
    const expected = [{
      id: 1,
      setup: 'setup',
      delivery: 'delivery'
    }]
    const result = favorites([], mockAction)
    expect(result).toEqual(expected)
  });
});