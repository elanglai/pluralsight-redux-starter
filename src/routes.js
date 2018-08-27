import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AboutPage2 from './components/about/AboutPage2';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path={"/"} component={App}>
    <IndexRoute component={HomePage} />
    <Route path={"courses"} component={ManageCoursePage} />
    <Route path={"course"} component={ManageCoursePage} />
    <Route path={"course/:id"} component={ManageCoursePage} />
    <Route path={"about"} component={AboutPage} />
    <Route path={"about2"} component={AboutPage2} />
    <Route path={"test"} component={ManageCoursePage} />
  </Route>
);
