import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
          <div>
          </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
// Connect is a higher order component that wraps the CoursesPage component
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// By omitting the mapDispatchToProps, the default dispatch is defined.
export default connect(mapStateToProps)(CoursesPage);
