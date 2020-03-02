import React from 'react';
import { MainPage, mapStateToProps, mapDispatchToProps } from './MainPage';
import { setJoke } from '../Actions'
import { shallow } from 'enzyme';

describe('MainPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MainPage
    joke={{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'}}
    fetchParams={{
      category: 'Any',
      blacklistFlags: [],
      type: []
    }}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
}); 

describe('mapStateToProps', () => {
  it('should return a joke object', () => {
    const mockState = {
      joke: {
        id: 42,
        setup: 'how much does a polarbear weigh?',
        delivery: 'enough to bresk the ice'
      },
      fetchParams: {
        category: 'Any',
        blacklistFlags: [],
        type: []
      }
    }
    const expected = {
        joke: {
          id: 42,
          setup: 'how much does a polarbear weigh?',
          delivery: 'enough to bresk the ice'
        },
        fetchParams: {
          category: 'Any',
          blacklistFlags: [],
          type: []
        }
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with setJoke', () => {
    const mockDispatch = jest.fn();
    const mockJoke = {
      id: 42,
      setup: 'how much does a polarbear weigh?',
      delivery: 'enough to bresk the ice'
    }
    const actionToDispatch = setJoke(mockJoke);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateJoke(mockJoke);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
})