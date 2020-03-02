import { fetchParams} from './fetchParams';

describe('fetchParams', () => {
  it('should return initial state if no state is provided', () => {
    const expected = {};
    const result = fetchParams(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return the correct array if the action type is ADD_PARAMS', () => {
    const mockStateObj = {
      category: 'Any',
      blacklistFlags: ['nsfw'],
      type: ['single']
    }
    const mockAction = {
      type: 'ADD_PARAMS',
      stateObj: mockStateObj
    }
    const expected = {
      category: 'Any',
      blacklistFlags: ['nsfw'],
      type: ['single']
    }
    const result = fetchParams({}, mockAction)
    expect(result).toEqual(expected)
  });
});