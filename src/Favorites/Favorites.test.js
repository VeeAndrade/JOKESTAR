import React from 'react';
import { Favorites, mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('FavoriteJoke', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow( <Favorites 
    favorites={[{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'}]}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
}); 

describe('mapStateToProps', () => {
  it('should return an array of favorites', () => {
    const mockState = {
      username: 'EvilKitty',
      favorites: [{id: 42, setup: 'setup joke', delivery: 'deliver'}]
    }
    const expected = {
      favorites: [{
        id: 42,
        setup: 'setup joke',
        delivery: 'deliver'
      }]
    }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
  })
})