export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      debugger;
      // The spread operator explodes the object array.
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
