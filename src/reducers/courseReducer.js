import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      // The spread operator explodes the object array.
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
