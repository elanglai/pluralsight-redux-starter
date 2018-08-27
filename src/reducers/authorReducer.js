import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  debugger;
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      debugger;

      // The spread operator explodes the object array.
      // return [...state, Object.assign({}, action.course)];
      return action.authors;

    default:
      return state;
  }
}
