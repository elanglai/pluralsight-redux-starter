import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}
export function updateCourseSuccess(courses) {
  return { type: types.UPDATE_COURSE_SUCCESS, courses};
}
export function createCourseSuccess(courses) {
  return { type: types.CREATE_COURSE_SUCCESS, courses};
}


export function loadCourses() {
  return function(dispatch) {
    // getAllCourses returns a promise.
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  // The getState can be used to access the redux store directly
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      // Either update or create a course
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
