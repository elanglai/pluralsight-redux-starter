import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to={"/courses"} activeClassName={"active"}>Courses</Link>
      {" | "}
      <Link to={"/about"} activeClassName={"active"}>About</Link>
      {" | "}
      <Link to={"/about2"} activeClassName={"active"}>About2</Link>
      {" | "}
      <Link to={"/test"} activeClassName={"test"}>Test</Link>

    </nav>
  );
};

export default Header;
