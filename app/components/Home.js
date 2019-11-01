import React from "react";
import { connect } from "react-redux";

export const Home = props => {
  return(
    <h1>Welcome</h1>
  )
};

const mapStateToProps = state => {
  return {
    // home: state.home
  };
};

export default connect(mapStateToProps)(Home);
