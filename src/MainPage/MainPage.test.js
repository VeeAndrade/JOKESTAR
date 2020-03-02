import React from 'react';
import { MainPage } from './MainPage';
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