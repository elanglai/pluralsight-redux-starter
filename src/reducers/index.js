import {combineReducers} from 'redux';
import courses from './courseReducer';

// One to many reducers are combined into a single root reducer
const rootReducer = combineReducers({
  courses // short hand property name
});
export default rootReducer;
