import React from 'react';
import { JokeForm, mapStateToProps, mapDispatchToProps } from './JokeForm';
import { shallow } from 'enzyme';
import { setJoke, addFetchParams } from '../Actions'

describe('JokeForm', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow( <JokeForm
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

  it('should unpdate state when handle change is invoked', () => {
    const mockState = {
      category: 'Any',
      blacklistFlags: [],
      type: []
    }
    const mockEvent = {
        target:
        {
          name: 'type',
          value: 'single'
        }
      }

      expect(wrapper.state()).toEqual(mockState);
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state('type')).toEqual(['single'])
  });

  it('should update the category when handleCategory is called', () => {
    const mockState = {
      category: 'Any',
      blacklistFlags: [],
      type: []
    }
    const mockEvent = {
      target: {
        name: 'category',
        value: 'Dark'
      }
    }
    expect(wrapper.state('category')).toEqual('Any')
    wrapper.instance().handleCategory(mockEvent)
    expect(wrapper.state('category')).toEqual('Dark')
  })
}); 

describe('mapStateToProps', () => {
  const mockState = {
    joke: {id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'},
    fetchParams: {category: 'Any',
    blacklistFlags: [],
    type: []}
  }
  const expected = {
     joke:{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'},
    fetchParams:{
      category: 'Any',
      blacklistFlags: [],
      type: []
    }
  }
  const mappedProps = mapStateToProps(mockState)
  expect(mappedProps).toEqual(expected);
});

describe('mapDispatchToProps', () => {
  it('should call updateJoke when update clicked button is clicked', () => {
    const mockResponse = {
      id: 42,
      setup: 'how much does a polarbear weigh?',
      delivery: 'enough to bresk the ice'
    }
    const mockDispatch = jest.fn();
    const actionToDispatch = setJoke(mockResponse)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateJoke(mockResponse);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('should addFetchParams when update clicked button is called', () => {
    const mockResponse = {
      category: 'Any',
      blacklistFlags: [],
      type: []
    }
    const mockDispatch = jest.fn();
    const actionToDispatch = addFetchParams(mockResponse)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addFetchParams(mockResponse)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});