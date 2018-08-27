import React from "react";
import {Link} from "react-router";

class CoursesPage extends React.Component {
  render() {
    return (
      <div className={"jumbotron"}>
        <h1>Courses</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more </Link>
      </div>
    );
  }
}

export default CoursesPage;


// import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
//
// import * as courseActions from '../../actions/courseActions';
//
// class CoursesPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//   }
//
//   render() {
//     return (
//           <div>
//           </div>
//     );
//   }
// }
//
// function mapStateToProps(state, ownProps) {
//   return {
//     courses: state.courses
//   };
// }
// // Connect is a higher order component that wraps the CoursesPage component
// //export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// // By omitting the mapDispatchToProps, the default dispatch is defined.
// export default connect(mapStateToProps)(CoursesPage);
