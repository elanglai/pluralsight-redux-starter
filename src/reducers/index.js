import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// One to many reducers are combined into a single root reducer
const rootReducer = combineReducers({
  courses, // short hand property name
  authors
});
export default rootReducer;
