import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStstusReducer';

// One to many reducers are combined into a single root reducer
const rootReducer = combineReducers({
  courses,  // short hand property name
  authors,
  ajaxCallInProgress
});
export default rootReducer;
