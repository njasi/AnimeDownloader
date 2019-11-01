import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";

import { fetchAbout } from "../redux/about";

import Series from "./Series";
import SearchResults from "./SearchResults";
import Episode from "./Episode";
import About from "./about";
import Navbar from "./Navbar";

export class Root extends React.Component {
  componentDidMount() {
    this.props.fetchWatching();
    this.props.fetchUpdate();
    this.props.loadAbout();
  }
  render() {
    return (
      <Router>
        <Route component={Navbar} />
        <Switch>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />

            <Route exact path="/search" component={SearchResults} />

            <Route component={() => <h1>404 not found</h1>} />
          </div>
        </Switch>
        <div id="footer">
          <div>Anime Downloader by Nick Jasinski</div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    watching: state.watching,
    updated: state.updated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWatching: () => dispatch({ type: "NONE" }),
    fetchUpdate: () => dispatch({ type: "NONE" }),
    loadAbout: () => dispatch(fetchAbout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
