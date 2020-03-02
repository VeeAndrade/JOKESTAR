import React from 'react';
import { NSFWJoke } from './NSFWJoke';
import { shallow } from 'enzyme';

describe('NSFWJoke', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow( <NSFWJoke 
    joke={{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'}}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
}); 