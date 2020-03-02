import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps } from './Nav';

describe('Nav', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow( <Nav username={{username: ''}}/> )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an array of favorites', () => {
    const mockState = {
      username: 'EvilKitty'
    }
    const expected = {
      username: 'EvilKitty'
    }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
  });
});