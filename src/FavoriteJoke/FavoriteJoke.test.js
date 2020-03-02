import React from 'react';
import { render } from '@testing-library/react';
import FavoriteJoke from './FavoriteJoke';
import { shallow } from 'enzyme';

describe('FavoriteJoke', () => {
  it('should match the snapshot', () => {
    const mockJoke = {
      id:42,
      setup: 'how much does a polarbear weigh?',
      punchline: 'enough to break the ice'
    }
    const wrapper = shallow(<FavoriteJoke jokeObj={mockJoke}/>)
    expect(wrapper).toMatchSnapshot();
  })
})