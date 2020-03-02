import { combineReducers } from 'redux';
import { username } from './username';
import { joke } from './joke';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  username,
  joke,
  favorites
})