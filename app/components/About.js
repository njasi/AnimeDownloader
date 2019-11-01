import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";

export const About = props => {
  return ReactHtmlParser(props.about);
};

const mapStateToProps = state => {
  return {
    about: state.about
  };
};

export default connect(mapStateToProps)(About);
