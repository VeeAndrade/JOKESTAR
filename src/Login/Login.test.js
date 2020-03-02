import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { updateUser } from '../apiCalls'

jest.mock('../apiCalls')

describe('Login', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Login
    username={'EvilKitty'}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state('username')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  });

  it('should change state when handleChange is invoked', () => {
    let mockEvent = {
      target: {
        name: 'username',
        value: 'EvilKitty'
      }
    }
    let mockEvent2 = {
      target: {
        name: 'password',
        value: '123456'
      }
    }
    expect(wrapper.state('username')).toEqual('')
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('username')).toEqual('EvilKitty')

    expect(wrapper.state('password')).toEqual('')
    wrapper.instance().handleChange(mockEvent2);
    expect(wrapper.state('password')).toEqual('123456')
  });

  // it('should verify the password when verifyPassword is invoked', () => {
  //   let mockEvent2 = {
  //     target: {
  //       name: 'password',
  //       value: '123456'
  //     }
  //   }
  //   updateUser.mockImplementation(() => {
  //     return Promise.resolve([{ username: 'KillerKitty'}])
  //   })
  //   wrapper.instance().verifyPassword(mockEvent2);
  //   expect(wrapper.state('error')).toEqual(true)
  // })
}); 