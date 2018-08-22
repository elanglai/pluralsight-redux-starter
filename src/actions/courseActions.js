import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}


export function loadCourses() {
  debugger;
  return function(dispatch) {
    // getAllCourses returns a promise.
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
