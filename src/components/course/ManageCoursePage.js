import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from "../../selectors/selectors";


export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    // bind the event handler to the proper this context
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  // NOTE: In React 16.x, this lifecycle function 'componentWillRecieveProps' was replaced with 'getDerivedStateFromProps'.  Use, should compo
  componentWillReceiveProps(nextProps) {
    // Only update if the immutable object changed, hence it's a new object
    if (this.props.course.id != nextProps.course.id) {
      // Necessary tp populate from when existing course is loaded directly.
      this.setState( {course: Object.assign({}, nextProps.course)});
    }
  }


  // This event handler will be called for every field updates
  updateCourseState(event) {
    // The event's target name returns the DOM element name. ie. "authorId"
    const field = event.target.name;
    // Clone the course such that the object is new
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    // Update the component's state
    return this.setState({course: course});
  }

  redirect() {
    this.context.router.push('/courses');
    toastr.success('Course saved');
    this.setState({saving: false});
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    // using React router's context to redirect to the courses url

  }

  render() {
    return (
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    );
  }
}


ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
// pull in the React Router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length) return course[0]; // sinbce filter returns an array, have to grab the first element
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path `/course/:id``

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
