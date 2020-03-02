import React from 'react';
import { Joke } from './Joke';
import { shallow } from 'enzyme';

describe('Joke', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow( <Joke
    joke={{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'}}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
}); 