import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";

import { fetchAbout } from "../redux/about";

import Series from "./Series";
import Search from "./Search";
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
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />

            {/* <Route exact path="/series" component={Series} />
              <Route exact path="/search" component={Search} /> */}

            <Route component={() => <h1>404 not found</h1>} />
          </Switch>
        </div>
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
