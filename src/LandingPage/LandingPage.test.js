import React from 'react';
import { LandingPage} from './LandingPage';
import { shallow } from 'enzyme';

describe('LandingPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow( <LandingPage
    joke={{id: 42, setup: 'how much does a polarbear weigh?', delivery: 'enough to bresk the ice'}}
    username={'EvilCat'}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
}); 