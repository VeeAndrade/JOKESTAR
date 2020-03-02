import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../Actions'
import './Login.scss';
// import { mapStateToProps, mapDispatchToProps } from '../LandingPage/LandingPage';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  verifyPassword = e => {
    this.props.updateUser(this.state.username)
    let values = Object.values(this.state);
    values.includes('') ? this.setState({error: true}) : this.clearLogin()
  }

  clearLogin = () => {
    this.setState({username: '', password: '', error: false});
  }

  render() {
    return(
      <section className='login-section'>
        <form className='login-form'>
          <section className='inputs-section'>
            <input 
            type='text'
            placeholder='Username'
            className='username-input'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            />
            <input
            type='password'
            placeholder='Password'
            className='password-input'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            />
          </section>
          <section className='button-container'>
            {this.state.error !== true ? 
              <Link to='/main-page' className='sign-in-button' onClick={(event) => this.verifyPassword(event)}>
                Sign In
              </Link>
               : console.log(this.state.error)}
          </section>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username
})

const mapDispatchToProps = dispatch => ({
  updateUser: username => dispatch(updateUser(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);