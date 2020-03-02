import React, { Component } from 'react';
import { getSpecificJoke } from '../apiCalls';
import { connect } from 'react-redux';
import './JokeForm.scss';
import { setJoke } from '../Actions'
import { addFetchParams } from '../Actions'


export class JokeForm extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Any',
      blacklistFlags: [],
      type: []
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: [...this.state[e.target.name], e.target.value]})
  }

  handleCategory = (e) => {
    this.setState({category: e.target.value})
  }

  updateClickedButton = async (e) => {
    e.preventDefault()
    this.props.findClickedBtn(e)
    this.props.addFetchParams(this.state)
    let promiseJoke = await getSpecificJoke(this.state)
    this.props.updateJoke(promiseJoke)
  }

  render() {
    return (
      <section className='joke-form-wrapper'>
        <form className='joke-form'>
          <section className='form-category-section'>
          <label className='form-label'>Category:</label>
          <select className='category-select-elem' onChange={(event) => this.handleCategory(event)} value={this.state.category}>
            <option className='category-options' value='Any'>Any</option>
            <option className='category-options' value='Dark'>Dark</option>
            <option className='category-options' value='Miscellaneous'>Miscellaneous</option>
          </select>
          </section>
          <section className='joke-type-section'>
          <label className='form-label'>Type:</label>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='type' value='single'/><span className='checkbox-span'>Single</span>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='type' value='twopart'/><span className='checkbox-span'>Two-part</span>
          </section>
          <section className='joke-flags-section'>
          <label className='form-label'>Blacklist Flags(optional):</label>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='blacklistFlags' value='nsfw'/><span className='checkbox-span'>NSFW</span>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='blacklistFlags' value='religious'/><span className='checkbox-span'>Religious</span>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='blacklistFlags' value='political'/><span className='checkbox-span'>Political</span>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='blacklistFlags' value='racist'/><span className='checkbox-span'>Racist</span>
            <input type='checkbox' onClick={(event) => this.handleChange(event)} className='input-checkboxes' name='blacklistFlags' value='sexist'/><span className='checkbox-span'>Sexist</span>
          </section>
          <section className='submit-form-button'>
            <button className='submit-specifications' onClick={(event) => this.updateClickedButton(event)} value='getJoke'>Find Me a Joke!</button>
          </section>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  joke: state.joke,
  fetchParams: state.fetchParams
})

export const mapDispatchToProps = dispatch => ({
  updateJoke: joke => dispatch(setJoke(joke)),
  addFetchParams: options => dispatch(addFetchParams(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(JokeForm);