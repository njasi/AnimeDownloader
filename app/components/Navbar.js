import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = props => {
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg"
          alt="Anime Downloader watch anime offline"
        />
      </a>
      <div className="navbar-links-holder">
        <ul className="navbar-links">
          <li className="navbar-link-holder">
            <NavLink
              exact
              to="/"
              className="navbar-link"
              activeClassName="currentLocation navbar-link"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-link-holder">
            <NavLink
              exact
              to="/downloaded"
              className="navbar-link"
              activeClassName="currentLocation navbar-link"
            >
              Downloaded
            </NavLink>
          </li>
          <li className="navbar-link-holder">
            <NavLink
              exact
              to="/watching"
              className="navbar-link"
              activeClassName="currentLocation navbar-link"
            >
              Watching
            </NavLink>
          </li>
          <li className="navbar-link-holder">
            <NavLink
              exact
              to="/settings"
              className="navbar-link"
              activeClassName="currentLocation navbar-link"
            >
              Settings
            </NavLink>
          </li>
          <li className="navbar-link-holder">
            <NavLink
              exact
              to="/about"
              className="navbar-link"
              activeClassName="currentLocation navbar-link"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
// If i ever need to connect to the state
export default Navbar;
