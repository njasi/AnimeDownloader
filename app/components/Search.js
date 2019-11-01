import React from "react";
import ReactDOM from "react-dom";
import SeriesList from "./SeriesList";
import Axios from "axios";
import { connect } from "react-redux";

const servers = ["gogoanime.se", "gogoanimes.tv", "animefreak"];

class Search extends React.Component {
  constructor(props) {
    super();

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {}

  handleSearch(event) {
    event.preventDefault();
    if (document.getElementById("search-input").value != "") {
      this.props.getSeries();
      this.props.history.push("/search")
    }
  }

  render() {
    return (
      <div
        className={
          this.props.smallBar ? "search-bar nav" : "search-bar wide-bar"
        }
      >
        <form onSubmit={this.handleSearch} autoComplete="off">
          <input
            // className = "search-bar"
            id="search-input"
            name="term"
            type="text"
            placeholder="search..."
          />
          {this.props.smallBar ? (
            <button id="search-button" type="submit">
              Search
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    smallBar: ownProps.size ? ownProps.size == "small" : false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSeries: term => dispatch({ type: "NONE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
