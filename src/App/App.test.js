import React from 'react';
import { App, mapDispatchToProps } from './App';
import { updateUser } from '../Actions';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call updateUser when logout user is called', () => {
    let mockResponse = {username: 'EvilKitty'}
    let mockDispatch = jest.fn();
    let actionToDispatch = updateUser(mockResponse)
    let mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.updateUser(mockResponse)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});
