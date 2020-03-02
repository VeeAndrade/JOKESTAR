import React from 'react';
import { SafeJoke } from './SafeJoke';
import { shallow } from 'enzyme';

describe('SafeJoke', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SafeJoke
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