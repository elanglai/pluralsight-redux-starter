import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class AboutPage extends React.Component {

  // component constructor
  constructor(props, context) {
    super(props, context);

    // Initialize state
    this.state = {
      course: { title: "" }
    };

    // call our bind functions to this component.
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  // -- Start Child functions
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // We're dispatching an action
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    //this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  // -- End Child functions

  // Note: To Refactor.. Container component typically call a child component that just cares of the html render.
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

// Property Type Validation
AboutPage.propTypes = {
// no longer rewuired now thta we define mapDispatchToProps in our component
// dispatch: PropTypes.func.isRequired
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// -- Start Redux function and related functions
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// -- End Redux function and related functions
// Connect is a higher order component that wraps the CoursesPage component
export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
// By omitting the mapDispatchToProps, the default dispatch is defined.
//export default connect(mapStateToProps)(AboutPage);
