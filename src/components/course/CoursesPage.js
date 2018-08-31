import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from '../course/CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {

  // component constructor
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  // -- End Child functions

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  // Note: To Refactor.. Container component typically call a child "Presentation style" component that just cares of the html render.
  render() {
    // using de-structuring to keep the calls short
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input  type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

// Property Type Validation
CoursesPage.propTypes = {
// no longer rewuired now thta we define mapDispatchToProps in our component
// dispatch: PropTypes.func.isRequired
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// -- Start Redux function and related functions
function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  // debugger;
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// -- End Redux function and related functions
// Connect is a higher order component that wraps the CoursesPage component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// By omitting the mapDispatchToProps, the default dispatch is defined.
//export default connect(mapStateToProps)(AboutPage);
