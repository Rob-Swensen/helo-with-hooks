import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  console.log(props)
  return (
    <div>
      <Link to="/dashboard">Home</Link>
      <Link to="/new">New Post</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);
